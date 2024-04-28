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

open class AwChromeClient {
    open fun getDefaultVideoPoster(view: AwWebView): Bitmap? {
        return null
    }

    open fun getVideoLoadingProgressView(view: AwWebView): View? {
        return null
    }

    open fun getVisitedHistory(view: AwWebView, callback: Callback<Array<String>>) {

    }

    open fun onCloseWindow(view: AwWebView) {

    }

    open fun onConsoleMessage(view: AwWebView, consoleMessage: AwConsoleMessage): Boolean {
        return false
    }

    open fun onCreateWindow(view: AwWebView, isDialog: Boolean, isUserGesture: Boolean): Boolean {
        return false
    }

    open fun onGeolocationPermissionsHidePrompt(view: AwWebView) {

    }

    open fun onGeolocationPermissionsShowPrompt(
        view: AwWebView,
        origin: String,
        callback: AwGeolocationPermissions.Callback
    ) {

    }

    open fun onHideCustomView(view: AwWebView) {}

    open fun handleJsAlert(view: AwWebView, url: String, message: String, receiver: JsResultReceiver) {
        receiver.cancel()
    }

    open fun handleJsBeforeUnload(
        view: AwWebView,
        url: String,
        message: String,
        receiver: JsResultReceiver
    ) {
        receiver.confirm()
    }

    open fun handleJsConfirm(view: AwWebView, url: String, message: String, receiver: JsResultReceiver) {
        receiver.cancel()
    }

    open fun handleJsPrompt(
        view: AwWebView,
        url: String,
        message: String,
        defaultValue: String,
        receiver: JsPromptResultReceiver
    ) {
        receiver.cancel()
    }

    open fun onPermissionRequest(view: AwWebView, awPermissionRequest: AwPermissionRequest) {}

    open fun onPermissionRequestCanceled(view: AwWebView, awPermissionRequest: AwPermissionRequest) {}

    open fun onProgressChanged(view: AwWebView, progress: Int) {}

    open fun onReceivedIcon(view: AwWebView, bitmap: Bitmap?) {}

    open fun onReceivedTitle(view: AwWebView, title: String) {}

    open fun onReceivedTouchIconUrl(view: AwWebView, url: String, precomposed: Boolean) {}

    open fun onRequestFocus(view: AwWebView) {}

    open fun onShowCustomView(view: AwWebView, v: View, callback: AwContentsClient.CustomViewCallback) {

    }

    open fun showFileChooser(
        view: AwWebView,
        uploadFilePathsCallback: Callback<Array<String>>,
        fileChooserParams: AwContentsClient.FileChooserParamsImpl
    ) {

    }
}