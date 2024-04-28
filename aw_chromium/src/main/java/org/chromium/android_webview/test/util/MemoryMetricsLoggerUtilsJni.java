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
public class MemoryMetricsLoggerUtilsJni implements MemoryMetricsLoggerUtils.Natives {
  private static MemoryMetricsLoggerUtils.Natives testInstance;

  public static final JniStaticTestMocker<MemoryMetricsLoggerUtils.Natives> TEST_HOOKS =
      new JniStaticTestMocker<MemoryMetricsLoggerUtils.Natives>() {
    @Override
    public void setInstanceForTesting(MemoryMetricsLoggerUtils.Natives instance) {
      if (!GEN_JNI.TESTING_ENABLED) {
        throw new RuntimeException(
            "Tried to set a JNI mock when mocks aren't enabled!");
      }
      testInstance = instance;
    }
  };

  @Override
  public boolean forceRecordHistograms() {
    return (boolean) GEN_JNI.org_chromium_android_1webview_test_util_MemoryMetricsLoggerUtils_forceRecordHistograms();
  }

  public static MemoryMetricsLoggerUtils.Natives get() {
    if (GEN_JNI.TESTING_ENABLED) {
      if (testInstance != null) {
        return testInstance;
      }
      if (GEN_JNI.REQUIRE_MOCK) {
        throw new UnsupportedOperationException(
            "No mock found for the native implementation of MemoryMetricsLoggerUtils.Natives. "
            + "The current configuration requires implementations be mocked.");
      }
    }
    NativeLibraryLoadedStatus.checkLoaded();
    return new MemoryMetricsLoggerUtilsJni();
  }
}
