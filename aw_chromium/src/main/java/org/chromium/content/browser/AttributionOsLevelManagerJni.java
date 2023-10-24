//
// This file was generated by third_party/jni_zero/jni_generator.py
//
package org.chromium.content.browser;

import org.jni_zero.CheckDiscard;
import org.jni_zero.GEN_JNI;
import org.jni_zero.JniStaticTestMocker;
import org.jni_zero.NativeLibraryLoadedStatus;

@CheckDiscard("crbug.com/993421")
class AttributionOsLevelManagerJni implements AttributionOsLevelManager.Natives {
    private static AttributionOsLevelManager.Natives testInstance;

    public static final JniStaticTestMocker<AttributionOsLevelManager.Natives> TEST_HOOKS = new JniStaticTestMocker<AttributionOsLevelManager.Natives>() {
        @Override
        public void setInstanceForTesting(AttributionOsLevelManager.Natives instance) {
            if (!GEN_JNI.TESTING_ENABLED) {
                throw new RuntimeException("Tried to set a JNI mock when mocks aren't enabled!");
            }
            testInstance = instance;
        }
    };

    @Override
    public void onDataDeletionCompleted(long nativeAttributionOsLevelManagerAndroid, int requestId) {
        GEN_JNI.org_chromium_content_browser_AttributionOsLevelManager_onDataDeletionCompleted(nativeAttributionOsLevelManagerAndroid, requestId);
    }

    @Override
    public void onMeasurementStateReturned(int state) {
        GEN_JNI.org_chromium_content_browser_AttributionOsLevelManager_onMeasurementStateReturned(state);
    }

    @Override
    public void onRegistrationCompleted(long nativeAttributionOsLevelManagerAndroid, int requestId, boolean success) {
        GEN_JNI.org_chromium_content_browser_AttributionOsLevelManager_onRegistrationCompleted(nativeAttributionOsLevelManagerAndroid, requestId, success);
    }

    public static AttributionOsLevelManager.Natives get() {
        if (GEN_JNI.TESTING_ENABLED) {
            if (testInstance != null) {
                return testInstance;
            }
            if (GEN_JNI.REQUIRE_MOCK) {
                throw new UnsupportedOperationException("No mock found for the native implementation of AttributionOsLevelManager.Natives. " + "The current configuration requires implementations be mocked.");
            }
        }
        NativeLibraryLoadedStatus.checkLoaded();
        return new AttributionOsLevelManagerJni();
    }
}