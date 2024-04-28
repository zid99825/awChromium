package com.dragontec.android_webview

import android.net.http.SslError
import android.os.Message
import android.view.KeyEvent
import org.chromium.android_webview.AwContentsClient.AwWebResourceError
import org.chromium.android_webview.AwContentsClient.AwWebResourceRequest
import org.chromium.android_webview.AwContentsClientBridge
import org.chromium.android_webview.AwHttpAuthHandler
import org.chromium.android_webview.AwRenderProcessGoneDetail
import org.chromium.android_webview.SafeBrowsingAction
import org.chromium.android_webview.safe_browsing.AwSafeBrowsingResponse
import org.chromium.base.Callback
import org.chromium.components.embedder_support.util.WebResourceResponseInfo
import java.security.Principal

open class AwWebViewClient {
    open fun doUpdateVisitedHistory(view: AwWebView, url: String, isReload: Boolean) {

    }

    open fun onFormResubmission(view: AwWebView, dontResend: Message, resend: Message) {
        dontResend.sendToTarget()
    }

    open fun onLoadResource(view: AwWebView, url: String) {

    }

    open fun onPageCommitVisible(view: AwWebView, url: String) {

    }

    open fun onPageFinished(view: AwWebView, url: String) {

    }

    open fun onPageStarted(view: AwWebView, url: String) {

    }

    open fun onReceivedClientCertRequest(
        view: AwWebView,
        callback: AwContentsClientBridge.ClientCertificateRequestCallback,
        keyTypes: Array<String>,
        principals: Array<Principal>,
        host: String,
        port: Int
    ) {
        callback.proceed(null, null)
    }

    open fun onReceivedError(view: AwWebView, request: AwWebResourceRequest, error: AwWebResourceError) {

    }

    open fun onReceivedHttpAuthRequest(
        view: AwWebView,
        handler: AwHttpAuthHandler,
        host: String,
        realm: String
    ) {
        handler.cancel()
    }

    open fun onReceivedHttpError(
        view: AwWebView,
        request: AwWebResourceRequest,
        response: WebResourceResponseInfo
    ) {
    }

    open fun onReceivedLoginRequest(view: AwWebView, realm: String, account: String?, args: String) {}

    open fun onReceivedSslError(view: AwWebView, callback: Callback<Boolean>, error: SslError){
        callback.onResult(false)
    }

    open fun onRenderProcessGone(view: AwWebView, detail: AwRenderProcessGoneDetail): Boolean{
        return false
    }

    open fun onSafeBrowsingHit(
        view: AwWebView,
        request: AwWebResourceRequest,
        threatType: Int,
        callback: Callback<AwSafeBrowsingResponse>
    ) {
        callback.onResult(AwSafeBrowsingResponse(SafeBrowsingAction.SHOW_INTERSTITIAL, true))
    }

    open fun onScaleChanged(view: AwWebView, oldScale: Float, newScale: Float) {

    }

    open fun onUnhandledKeyEvent(view: AwWebView, event: KeyEvent){

    }

    open fun shouldInterceptRequest(view: AwWebView, request: AwWebResourceRequest): WebResourceResponseInfo? {
        return null
    }

    open fun shouldOverrideKeyEvent(view: AwWebView, event: KeyEvent): Boolean {
        return false
    }

    open fun shouldOverrideUrlLoading(view: AwWebView, request: AwWebResourceRequest): Boolean {
        return false
    }
}