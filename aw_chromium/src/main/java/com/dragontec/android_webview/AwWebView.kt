package com.dragontec.android_webview

import android.content.Context
import android.content.res.Configuration
import android.graphics.Bitmap
import android.graphics.Canvas
import android.net.Uri
import android.net.http.SslCertificate
import android.net.http.SslError
import android.os.Message
import android.util.SparseArray
import android.view.KeyEvent
import android.view.View
import android.view.autofill.AutofillValue
import android.view.textclassifier.TextClassifier
import org.chromium.android_webview.AwBrowserContext
import org.chromium.android_webview.AwBrowserProcess
import org.chromium.android_webview.AwConsoleMessage
import org.chromium.android_webview.AwContents
import org.chromium.android_webview.AwContentsClientBridge
import org.chromium.android_webview.AwContentsStatics
import org.chromium.android_webview.AwGeolocationPermissions
import org.chromium.android_webview.AwHttpAuthHandler
import org.chromium.android_webview.AwLocaleConfig
import org.chromium.android_webview.AwRenderProcessGoneDetail
import org.chromium.android_webview.AwSettings
import org.chromium.android_webview.JsPromptResultReceiver
import org.chromium.android_webview.JsResultReceiver
import org.chromium.android_webview.permission.AwPermissionRequest
import org.chromium.android_webview.renderer_priority.RendererPriority
import org.chromium.android_webview.safe_browsing.AwSafeBrowsingResponse
import org.chromium.android_webview.shell.AwShellResourceProvider
import org.chromium.android_webview.test.AwTestContainerView
import org.chromium.android_webview.test.NullContentsClient
import org.chromium.base.Callback

import org.chromium.base.CommandLine
import org.chromium.base.ContextUtils
import org.chromium.base.PathUtils
import org.chromium.components.embedder_support.util.WebResourceResponseInfo
import org.chromium.ui.base.ResourceBundle
import java.security.Principal

class AwWebView(val context: Context) : AwTestContainerView(context, false) {

    companion object {
        private const val TAG = "AwWebView"

        private var isInited = false
        fun initialize(context: Context) {
            if (!isInited) {
                isInited = true
                ContextUtils.initApplicationContext(context.applicationContext)
                PathUtils.setPrivateDataDirectorySuffix("webview", "WebView")
                CommandLine.initFromFile("/data/local/tmp/android-webview-command-line")
                ResourceBundle.setAvailablePakLocales(AwLocaleConfig.getWebViewSupportedPakLocales())
                CommandLine.init(
                    arrayOf(
                        "--disable-site-isolation-trials",
                        "--disable-web-security",
                        "--enable-logging=stderr",
                        "--v=1"
                    )
                )
                AwShellResourceProvider.registerResources(context)
                AwBrowserProcess.loadLibrary(null)
                AwBrowserProcess.start()
                installDrawFnFunctionTable(false)
            }
        }

        fun clearClientCertPreferences(onCleared: Runnable) {
            AwContentsStatics.clearClientCertPreferences(onCleared)
        }

        fun getSafeBrowsingPrivacyPolicyUrl(): Uri {
            return AwContentsStatics.getSafeBrowsingPrivacyPolicyUrl()
        }
    }

    private val awBrowserContext: AwBrowserContext =
        AwBrowserContext(AwBrowserContext.getDefault().nativeBrowserContextPointer)
    private val awClient = object : NullContentsClient() {
        override fun doUpdateVisitedHistory(url: String, isReload: Boolean) {
            val client = webViewClient
            if (client != null) {
                client.doUpdateVisitedHistory(this@AwWebView, url, isReload)
            } else {
                super.doUpdateVisitedHistory(url, isReload)
            }
        }

        override fun onFormResubmission(dontResend: Message, resend: Message) {
            val client = webViewClient
            if (client != null) {
                client.onFormResubmission(this@AwWebView, dontResend, resend)
            } else {
                super.onFormResubmission(dontResend, resend)
            }
        }

        override fun onLoadResource(url: String) {
            val client = webViewClient
            if (client != null) {
                client.onLoadResource(this@AwWebView, url)
            } else {
                super.onLoadResource(url)
            }
        }

        override fun onPageCommitVisible(url: String) {
            val client = webViewClient
            if (client != null) {
                client.onPageCommitVisible(this@AwWebView, url)
            } else {
                super.onPageCommitVisible(url)
            }
        }

        override fun onPageFinished(url: String) {
            val client = webViewClient
            if (client != null) {
                client.onPageFinished(this@AwWebView, url)
            } else {
                super.onPageFinished(url)
            }
        }

        override fun onPageStarted(url: String) {
            val client = webViewClient
            if (client != null) {
                client.onPageStarted(this@AwWebView, url)
            } else {
                super.onPageStarted(url)
            }
        }

        override fun onReceivedClientCertRequest(
            callback: AwContentsClientBridge.ClientCertificateRequestCallback,
            keyTypes: Array<String>,
            principals: Array<Principal>,
            host: String,
            port: Int
        ) {
            val client = webViewClient
            if (client != null) {
                client.onReceivedClientCertRequest(
                    this@AwWebView,
                    callback,
                    keyTypes,
                    principals,
                    host,
                    port
                )
            } else {
                super.onReceivedClientCertRequest(callback, keyTypes, principals, host, port)
            }
        }

        override fun onReceivedError(request: AwWebResourceRequest, error: AwWebResourceError) {
            val client = webViewClient
            if (client != null) {
                client.onReceivedError(this@AwWebView, request, error)
            } else {
                super.onReceivedError(request, error)
            }
        }

        override fun onReceivedHttpAuthRequest(
            handler: AwHttpAuthHandler,
            host: String,
            realm: String
        ) {
            val client = webViewClient
            if (client != null) {
                client.onReceivedHttpAuthRequest(this@AwWebView, handler, host, realm)
            } else {
                super.onReceivedHttpAuthRequest(handler, host, realm)
            }
        }

        override fun onReceivedHttpError(
            request: AwWebResourceRequest,
            response: WebResourceResponseInfo
        ) {
            val client = webViewClient
            if (client != null) {
                client.onReceivedHttpError(this@AwWebView, request, response)
            } else {
                super.onReceivedHttpError(request, response)
            }
        }

        override fun onReceivedLoginRequest(realm: String, account: String?, args: String) {
            val client = webViewClient
            if (client != null) {
                client.onReceivedLoginRequest(this@AwWebView, realm, account, args)
            } else {
                super.onReceivedLoginRequest(realm, account, args)
            }
        }

        override fun onReceivedSslError(callback: Callback<Boolean>, error: SslError) {
            val client = webViewClient
            if (client != null) {
                client.onReceivedSslError(this@AwWebView, callback, error)
            } else {
                super.onReceivedSslError(callback, error)
            }
        }

        override fun onRenderProcessGone(detail: AwRenderProcessGoneDetail): Boolean {
            val client = webViewClient
            if (client != null) {
                return client.onRenderProcessGone(this@AwWebView, detail)
            } else {
                return super.onRenderProcessGone(detail)
            }
        }

        override fun onSafeBrowsingHit(
            request: AwWebResourceRequest,
            threatType: Int,
            callback: Callback<AwSafeBrowsingResponse>
        ) {
            val client = webViewClient
            if (client != null) {
                client.onSafeBrowsingHit(this@AwWebView, request, threatType, callback)
            } else {
                super.onSafeBrowsingHit(request, threatType, callback)
            }
        }

        override fun onScaleChangedScaled(oldScale: Float, newScale: Float) {
            val client = webViewClient
            if (client != null) {
                client.onScaleChanged(this@AwWebView, oldScale, newScale)
            } else {
                super.onScaleChangedScaled(oldScale, newScale)
            }
        }

        override fun onUnhandledKeyEvent(event: KeyEvent) {
            val client = webViewClient
            if (client != null) {
                client.onUnhandledKeyEvent(this@AwWebView, event)
            } else {
                super.onUnhandledKeyEvent(event)
            }
        }

        override fun shouldInterceptRequest(request: AwWebResourceRequest): WebResourceResponseInfo? {
            val client = webViewClient
            if (client != null) {
                return client.shouldInterceptRequest(this@AwWebView, request)
            } else {
                return super.shouldInterceptRequest(request)
            }
        }

        override fun shouldOverrideKeyEvent(event: KeyEvent): Boolean {
            val client = webViewClient
            if (client != null) {
                return client.shouldOverrideKeyEvent(this@AwWebView, event)
            } else {
                return super.shouldOverrideKeyEvent(event)
            }
        }

        override fun shouldOverrideUrlLoading(request: AwWebResourceRequest): Boolean {
            val client = webViewClient
            if (client != null) {
                return client.shouldOverrideUrlLoading(this@AwWebView, request)
            } else {
                return super.shouldOverrideUrlLoading(request)
            }
        }

        override fun getDefaultVideoPoster(): Bitmap? {
            val client = webChromeClient
            if (client != null) {
                return client.getDefaultVideoPoster(this@AwWebView)
            } else {
                return super.getDefaultVideoPoster()
            }
        }

        override fun getVideoLoadingProgressView(): View? {
            val client = webChromeClient
            if (client != null) {
                return client.getVideoLoadingProgressView(this@AwWebView)
            } else {
                return super.getVideoLoadingProgressView()
            }
        }

        override fun getVisitedHistory(callback: Callback<Array<String>>) {
            val client = webChromeClient
            if (client != null) {
                client.getVisitedHistory(this@AwWebView, callback)
            } else {
                super.getVisitedHistory(callback)
            }
        }

        override fun onCloseWindow() {
            val client = webChromeClient
            if (client != null) {
                client.onCloseWindow(this@AwWebView)
            } else {
                super.onCloseWindow()
            }
        }

        override fun onConsoleMessage(consoleMessage: AwConsoleMessage): Boolean {
            val client = webChromeClient
            if (client != null) {
                return client.onConsoleMessage(this@AwWebView, consoleMessage)
            } else {
                return super.onConsoleMessage(consoleMessage)
            }
        }

        override fun onCreateWindow(isDialog: Boolean, isUserGesture: Boolean): Boolean {
            val client = webChromeClient
            if (client != null) {
                return client.onCreateWindow(this@AwWebView, isDialog, isUserGesture)
            } else {
                return super.onCreateWindow(isDialog, isUserGesture)
            }
        }

        override fun onGeolocationPermissionsHidePrompt() {
            val client = webChromeClient
            if (client != null) {
                client.onGeolocationPermissionsHidePrompt(this@AwWebView)
            } else {
                super.onGeolocationPermissionsHidePrompt()
            }
        }

        override fun onGeolocationPermissionsShowPrompt(
            origin: String,
            callback: AwGeolocationPermissions.Callback
        ) {
            val client = webChromeClient
            if (client != null) {
                client.onGeolocationPermissionsShowPrompt(this@AwWebView, origin, callback)
            } else {
                super.onGeolocationPermissionsShowPrompt(origin, callback)
            }
        }

        override fun onHideCustomView() {
            val client = webChromeClient
            if (client != null) {
                client.onHideCustomView(this@AwWebView)
            } else {
                super.onHideCustomView()
            }
        }

        override fun handleJsAlert(url: String, message: String, receiver: JsResultReceiver) {
            val client = webChromeClient
            if (client != null) {
                client.handleJsAlert(this@AwWebView, url, message, receiver)
            } else {
                super.handleJsAlert(url, message, receiver)
            }
        }

        override fun handleJsBeforeUnload(
            url: String,
            message: String,
            receiver: JsResultReceiver
        ) {
            val client = webChromeClient
            if (client != null) {
                client.handleJsBeforeUnload(this@AwWebView, url, message, receiver)
            } else {
                super.handleJsBeforeUnload(url, message, receiver)
            }
        }

        override fun handleJsConfirm(url: String, message: String, receiver: JsResultReceiver) {
            val client = webChromeClient
            if (client != null) {
                client.handleJsConfirm(this@AwWebView, url, message, receiver)
            } else {
                super.handleJsConfirm(url, message, receiver)
            }
        }

        override fun handleJsPrompt(
            url: String,
            message: String,
            defaultValue: String,
            receiver: JsPromptResultReceiver
        ) {
            val client = webChromeClient
            if (client != null) {
                client.handleJsPrompt(this@AwWebView, url, message, defaultValue, receiver)
            } else {
                super.handleJsPrompt(url, message, defaultValue, receiver)
            }
        }

        override fun onPermissionRequest(awPermissionRequest: AwPermissionRequest) {
            val client = webChromeClient
            if (client != null) {
                client.onPermissionRequest(this@AwWebView, awPermissionRequest)
            } else {
                super.onPermissionRequest(awPermissionRequest)
            }
        }

        override fun onPermissionRequestCanceled(awPermissionRequest: AwPermissionRequest) {
            val client = webChromeClient
            if (client != null) {
                client.onPermissionRequestCanceled(this@AwWebView, awPermissionRequest)
            } else {
                super.onPermissionRequestCanceled(awPermissionRequest)
            }
        }

        override fun onProgressChanged(progress: Int) {
            val client = webChromeClient
            if (client != null) {
                client.onProgressChanged(this@AwWebView, progress)
            } else {
                super.onProgressChanged(progress)
            }
        }

        override fun onReceivedIcon(bitmap: Bitmap?) {
            val client = webChromeClient
            if (client != null) {
                client.onReceivedIcon(this@AwWebView, bitmap)
            } else {
                super.onReceivedIcon(bitmap)
            }
        }

        override fun onReceivedTitle(title: String) {
            val client = webChromeClient
            if (client != null) {
                client.onReceivedTitle(this@AwWebView, title)
            } else {
                super.onReceivedTitle(title)
            }
        }

        override fun onReceivedTouchIconUrl(url: String, precomposed: Boolean) {
            val client = webChromeClient
            if (client != null) {
                client.onReceivedTouchIconUrl(this@AwWebView, url, precomposed)
            } else {
                super.onReceivedTouchIconUrl(url, precomposed)
            }
        }

        override fun onRequestFocus() {
            val client = webChromeClient
            if (client != null) {
                client.onRequestFocus(this@AwWebView)
            } else {
                super.onRequestFocus()
            }
        }

        override fun onShowCustomView(view: View, callback: CustomViewCallback) {
            val client = webChromeClient
            if (client != null) {
                client.onShowCustomView(this@AwWebView, view, callback)
            } else {
                super.onShowCustomView(view, callback)
            }
        }

        override fun showFileChooser(
            uploadFilePathsCallback: Callback<Array<String>>,
            fileChooserParams: FileChooserParamsImpl
        ) {
            val client = webChromeClient
            if (client != null) {
                client.showFileChooser(this@AwWebView, uploadFilePathsCallback, fileChooserParams)
            } else {
                super.showFileChooser(uploadFilePathsCallback, fileChooserParams)
            }
        }
    }

    private val awSettings = AwSettings(
        context,
        true,
        false,
        true,
        true,
        false
    )

    @Volatile
    var webChromeClient: AwChromeClient? = null

    @Volatile
    var webViewClient: AwWebViewClient? = null

    init {
        this.initialize(
            AwContents(
                awBrowserContext,
                this,
                context,
                this.internalAccessDelegate,
                this.nativeDrawFunctorFactory,
                awClient,
                awSettings
            )
        )
    }

    fun addJavascriptInterface(obj: Any, name: String) {
        awContents?.addJavascriptInterface(obj, name)
    }

    override fun autofill(values: SparseArray<AutofillValue>) {
        awContents?.autofill(values)
    }

    fun canGoBack(): Boolean {
        return awContents?.canGoBack() ?: false
    }

    fun canGoBackOrForward(step: Int): Boolean {
        return awContents?.canGoBackOrForward(step) ?: false
    }

    fun canGoForward(): Boolean {
        return awContents?.canGoForward() ?: false
    }

    fun canZoomIn(): Boolean {
        return awContents?.canZoomIn() ?: false
    }

    fun canZoomOut(): Boolean {
        return awContents?.canZoomOut() ?: false
    }

    fun clearCache(includeDiskFiles: Boolean) {
        awContents?.clearCache(includeDiskFiles)
    }

    fun clearFromData() {
        awBrowserContext.clearFormData()
    }

    fun clearHistory() {
        awContents?.clearHistory()
    }

    fun clearMatches() {
        awContents?.clearMatches()
    }

    fun clearSslPreferences() {
        awContents?.clearSslPreferences()
    }

    fun documentHasImages(message: Message) {
        awContents?.documentHasImages(message)
    }

    fun evaluateJavascript(script: String, resultCallback: Callback<String>) {
        awContents?.evaluateJavaScript(script, resultCallback)
    }

    fun findAllAsync(find: String) {
        awContents?.findAllAsync(find)
    }

    fun findNext(forward: Boolean) {
        awContents?.findNext(forward)
    }

    fun flingScroll(vx: Int, vy: Int) {
        awContents?.flingScroll(vx, vy)
    }

    fun getCertificate(): SslCertificate? {
        return awContents?.certificate
    }

    fun getContentHeight(): Int {
        return awContents?.contentHeightCss ?: 0
    }

    fun getFavicon(): Bitmap? {
        return awContents?.favicon
    }

    fun getOriginalUrl(): String? {
        return awContents?.originalUrl
    }

    fun getProgress(): Int {
        return awContents?.mostRecentProgress ?: 0
    }

    fun getRendererRequestedPriority(): Int {
        return awContents?.rendererRequestedPriority ?: RendererPriority.WAIVED
    }

    fun getSettings(): AwSettings? {
        return awContents?.settings
    }

    fun getTextClassifier(): TextClassifier? {
        return awContents?.textClassifier
    }

    fun getTitle(): String? {
        return awContents?.toString()
    }

    fun getUrl(): String? {
        return awContents?.url?.spec
    }

    fun stopLoading() {
        awContents?.stopLoading()
    }

    fun zoomBy(zoomFactor: Float) {
        awContents?.zoomBy(zoomFactor)
    }

    fun zoomIn() {
        awContents?.zoomIn()
    }

    fun zoomOut() {
        awContents?.zoomOut()
    }

    override fun computeHorizontalScrollOffset(): Int {
        if (awContents != null) {
            return awContents.computeHorizontalScrollOffset()
        }
        return super.computeHorizontalScrollOffset()
    }

    override fun computeHorizontalScrollRange(): Int {
        if (awContents != null) {
            return awContents.computeHorizontalScrollRange()
        }
        return super.computeHorizontalScrollRange()
    }

    override fun computeVerticalScrollExtent(): Int {
        if (awContents != null) {
            return awContents.computeVerticalScrollExtent()
        }
        return super.computeVerticalScrollExtent()
    }

    override fun computeVerticalScrollOffset(): Int {
        if (awContents != null) {
            return awContents.computeVerticalScrollOffset()
        }
        return super.computeVerticalScrollOffset()
    }

    override fun computeVerticalScrollRange(): Int {
        if (awContents != null) {
            return awContents.computeVerticalScrollRange()
        }
        return super.computeVerticalScrollRange()
    }


}
