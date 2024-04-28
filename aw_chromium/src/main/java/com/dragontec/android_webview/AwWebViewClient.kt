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

class AwWebViewClient {
    fun doUpdateVisitedHistory(view: AwWebView, url: String, isReload: Boolean) {

    }

    fun onFormResubmission(view: AwWebView, dontResend: Message, resend: Message) {
        dontResend.sendToTarget()
    }

    fun onLoadResource(view: AwWebView, url: String) {

    }

    fun onPageCommitVisible(view: AwWebView, url: String) {

    }

    fun onPageFinished(view: AwWebView, url: String) {

    }

    fun onPageStarted(view: AwWebView, url: String) {

    }

    fun onReceivedClientCertRequest(
        view: AwWebView,
        callback: AwContentsClientBridge.ClientCertificateRequestCallback,
        keyTypes: Array<String>,
        principals: Array<Principal>,
        host: String,
        port: Int
    ) {
        callback.proceed(null, null)
    }

    fun onReceivedError(view: AwWebView, request: AwWebResourceRequest, error: AwWebResourceError) {

    }

    fun onReceivedHttpAuthRequest(
        view: AwWebView,
        handler: AwHttpAuthHandler,
        host: String,
        realm: String
    ) {
        handler.cancel()
    }

    fun onReceivedHttpError(
        view: AwWebView,
        request: AwWebResourceRequest,
        response: WebResourceResponseInfo
    ) {
    }

    fun onReceivedLoginRequest(view: AwWebView, realm: String, account: String?, args: String) {}

    fun onReceivedSslError(view: AwWebView, callback: Callback<Boolean>, error: SslError){
        callback.onResult(false)
    }

    fun onRenderProcessGone(view: AwWebView, detail: AwRenderProcessGoneDetail): Boolean{
        return false
    }

    fun onSafeBrowsingHit(
        view: AwWebView,
        request: AwWebResourceRequest,
        threatType: Int,
        callback: Callback<AwSafeBrowsingResponse>
    ) {
        callback.onResult(AwSafeBrowsingResponse(SafeBrowsingAction.SHOW_INTERSTITIAL, true))
    }

    fun onScaleChanged(view: AwWebView, oldScale: Float, newScale: Float) {

    }

    fun onUnhandledKeyEvent(view: AwWebView, event: KeyEvent){

    }

    fun shouldInterceptRequest(view: AwWebView, request: AwWebResourceRequest): WebResourceResponseInfo? {
        return null
    }

    fun shouldOverrideKeyEvent(view: AwWebView, event: KeyEvent): Boolean {
        return false
    }

    fun shouldOverrideUrlLoading(view: AwWebView, request: AwWebResourceRequest): Boolean {
        return false
    }
}