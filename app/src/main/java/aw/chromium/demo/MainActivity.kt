package aw.chromium.demo

import android.graphics.Color
import android.os.Bundle
import android.util.Log
import android.view.KeyEvent
import android.view.inputmethod.EditorInfo
import android.widget.FrameLayout
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import androidx.appcompat.widget.AppCompatButton
import androidx.appcompat.widget.AppCompatEditText
import com.dragontec.gref.webview.AwChromium
import com.dragontec.gref.webview.AwChromiumClient
import org.chromium.android_webview.AwRenderProcessGoneDetail

class MainActivity : AppCompatActivity() {
    private lateinit var awChromium: AwChromium

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        AwChromium.initialize(
            this, arrayOf("--disable-site-isolation-trials", "--disable-web-security")
        )
        setContentView(R.layout.activity_main)

        val awContainerView = findViewById<FrameLayout>(R.id.webview_container)

        awChromium = AwChromium(this)
        awChromium.awContents.setBackgroundColor(Color.WHITE)
        awChromium.awChromiumClient = object : AwChromiumClient(this) {
            override fun shouldOverrideUrlLoading(request: AwWebResourceRequest?): Boolean {
                awChromium.awContents.loadUrl(request!!.url)
                return true
            }

            override fun onPageFinished(url: String?) {
                super.onPageFinished(url)
//                awChromium.awContents.evaluateJavaScript(
//                    "javascript:(function(){var script=document.createElement(\"script\");script.src=\"https://cdn.jsdelivr.net/npm/eruda\";document.body.append(script);script.onload=function(){eruda.init();console.log(document.querySelector(\"div[class*=g-recaptcha]\").querySelector(\"iframe[title*=reCAPTCHA]\").contentWindow.document.querySelector(\"label\").textContent);}})();",
//                    null
//                )
            }

            override fun onRenderProcessGone(detail: AwRenderProcessGoneDetail?): Boolean {
                Log.d("awChromium", "onRenderProcessGone $detail")
                return true
//                return super.onRenderProcessGone(detail)
            }
        }
        awContainerView.addView(awChromium)

        awChromium.awContents.loadUrl("http://hc.nhk.or.jp/hc-home/index.html")

    }

    override fun onDestroy() {
        awChromium.destroy()
        super.onDestroy()
    }
}