package aw.chromium.demo

import android.app.Application
import android.content.Context
import android.widget.directwriting.IDirectWritingService
import com.dragontec.gref.webview.AwChromium
import org.chromium.base.PathUtils

class MainApp : Application() {

    override fun attachBaseContext(context: Context?) {
        super.attachBaseContext(context)
        AwChromium.initializeBase(this)
    }

}