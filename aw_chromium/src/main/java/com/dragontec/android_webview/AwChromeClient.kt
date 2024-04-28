package com.dragontec.android_webview

import android.graphics.Bitmap
import android.view.View
import org.chromium.android_webview.AwConsoleMessage
import org.chromium.android_webview.AwContentsClient
import org.chromium.android_webview.AwGeolocationPermissions
import org.chromium.android_webview.JsPromptResultReceiver
import org.chromium.android_webview.JsResultReceiver
import org.chromium.android_webview.permission.AwPermissionRequest
import org.chromium.base.Callback

class AwChromeClient {
    fun getDefaultVideoPoster(view: AwWebView): Bitmap? {
        return null
    }

    fun getVideoLoadingProgressView(view: AwWebView): View? {
        return null
    }

    fun getVisitedHistory(view: AwWebView, callback: Callback<Array<String>>) {

    }

    fun onCloseWindow(view: AwWebView) {

    }

    fun onConsoleMessage(view: AwWebView, consoleMessage: AwConsoleMessage): Boolean {
        return false
    }

    fun onCreateWindow(view: AwWebView, isDialog: Boolean, isUserGesture: Boolean): Boolean {
        return false
    }

    fun onGeolocationPermissionsHidePrompt(view: AwWebView) {

    }

    fun onGeolocationPermissionsShowPrompt(
        view: AwWebView,
        origin: String,
        callback: AwGeolocationPermissions.Callback
    ) {

    }

    fun onHideCustomView(view: AwWebView) {}

    fun handleJsAlert(view: AwWebView, url: String, message: String, receiver: JsResultReceiver) {
        receiver.cancel()
    }

    fun handleJsBeforeUnload(
        view: AwWebView,
        url: String,
        message: String,
        receiver: JsResultReceiver
    ) {
        receiver.confirm()
    }

    fun handleJsConfirm(view: AwWebView, url: String, message: String, receiver: JsResultReceiver) {
        receiver.cancel()
    }

    fun handleJsPrompt(
        view: AwWebView,
        url: String,
        message: String,
        defaultValue: String,
        receiver: JsPromptResultReceiver
    ) {
        receiver.cancel()
    }

    fun onPermissionRequest(view: AwWebView, awPermissionRequest: AwPermissionRequest) {}

    fun onPermissionRequestCanceled(view: AwWebView, awPermissionRequest: AwPermissionRequest) {}

    fun onProgressChanged(view: AwWebView, progress: Int) {}

    fun onReceivedIcon(view: AwWebView, bitmap: Bitmap?) {}

    fun onReceivedTitle(view: AwWebView, title: String) {}

    fun onReceivedTouchIconUrl(view: AwWebView, url: String, precomposed: Boolean) {}

    fun onRequestFocus(view: AwWebView) {}

    fun onShowCustomView(view: AwWebView, v: View, callback: AwContentsClient.CustomViewCallback) {

    }

    fun showFileChooser(
        view: AwWebView,
        uploadFilePathsCallback: Callback<Array<String>>,
        fileChooserParams: AwContentsClient.FileChooserParamsImpl
    ) {

    }
}