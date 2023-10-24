//
// This file was generated by third_party/jni_zero/jni_generator.py
//
package org.chromium.components.content_capture;

import org.chromium.content_public.browser.WebContents;
import org.jni_zero.CheckDiscard;
import org.jni_zero.GEN_JNI;
import org.jni_zero.JniStaticTestMocker;
import org.jni_zero.NativeLibraryLoadedStatus;

@CheckDiscard("crbug.com/993421")
class ContentCaptureTestSupportJni implements ContentCaptureTestSupport.Natives {
    private static ContentCaptureTestSupport.Natives testInstance;

    public static final JniStaticTestMocker<ContentCaptureTestSupport.Natives> TEST_HOOKS = new JniStaticTestMocker<ContentCaptureTestSupport.Natives>() {
        @Override
        public void setInstanceForTesting(ContentCaptureTestSupport.Natives instance) {
            if (!GEN_JNI.TESTING_ENABLED) {
                throw new RuntimeException("Tried to set a JNI mock when mocks aren't enabled!");
            }
            testInstance = instance;
        }
    };

    @Override
    public void disableGetFaviconFromWebContents() {
        GEN_JNI.org_chromium_components_content_1capture_ContentCaptureTestSupport_disableGetFaviconFromWebContents();
    }

    @Override
    public void simulateDidUpdateFaviconURL(WebContents webContents, String faviconJson) {
        GEN_JNI.org_chromium_components_content_1capture_ContentCaptureTestSupport_simulateDidUpdateFaviconURL(webContents, faviconJson);
    }

    public static ContentCaptureTestSupport.Natives get() {
        if (GEN_JNI.TESTING_ENABLED) {
            if (testInstance != null) {
                return testInstance;
            }
            if (GEN_JNI.REQUIRE_MOCK) {
                throw new UnsupportedOperationException("No mock found for the native implementation of ContentCaptureTestSupport.Natives. " + "The current configuration requires implementations be mocked.");
            }
        }
        NativeLibraryLoadedStatus.checkLoaded();
        return new ContentCaptureTestSupportJni();
    }
}