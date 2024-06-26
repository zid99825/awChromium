//
// This file was generated by third_party/jni_zero/jni_generator.py
//
package org.chromium.android_webview.test.util;

import org.jni_zero.CheckDiscard;
import org.jni_zero.JniStaticTestMocker;
import org.jni_zero.NativeLibraryLoadedStatus;
import org.jni_zero.GEN_JNI;
import org.jni_zero.JNINamespace;
import org.jni_zero.NativeMethods;

@CheckDiscard("crbug.com/993421")
public class RendererProcessMetricsProviderUtilsJni implements RendererProcessMetricsProviderUtils.Natives {
  private static RendererProcessMetricsProviderUtils.Natives testInstance;

  public static final JniStaticTestMocker<RendererProcessMetricsProviderUtils.Natives> TEST_HOOKS =
      new JniStaticTestMocker<RendererProcessMetricsProviderUtils.Natives>() {
    @Override
    public void setInstanceForTesting(RendererProcessMetricsProviderUtils.Natives instance) {
      if (!GEN_JNI.TESTING_ENABLED) {
        throw new RuntimeException(
            "Tried to set a JNI mock when mocks aren't enabled!");
      }
      testInstance = instance;
    }
  };

  @Override
  public void forceRecordHistograms() {
    GEN_JNI.org_chromium_android_1webview_test_util_RendererProcessMetricsProviderUtils_forceRecordHistograms();
  }

  public static RendererProcessMetricsProviderUtils.Natives get() {
    if (GEN_JNI.TESTING_ENABLED) {
      if (testInstance != null) {
        return testInstance;
      }
      if (GEN_JNI.REQUIRE_MOCK) {
        throw new UnsupportedOperationException(
            "No mock found for the native implementation of RendererProcessMetricsProviderUtils.Natives. "
            + "The current configuration requires implementations be mocked.");
      }
    }
    NativeLibraryLoadedStatus.checkLoaded();
    return new RendererProcessMetricsProviderUtilsJni();
  }
}
