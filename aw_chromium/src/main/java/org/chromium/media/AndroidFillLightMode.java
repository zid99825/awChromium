
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file is autogenerated by
//     java_cpp_enum.py
// From
//     ../../media/capture/video/android/photo_capabilities.h

package org.chromium.media;

import androidx.annotation.IntDef;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

@IntDef({
    AndroidFillLightMode.NOT_SET, AndroidFillLightMode.OFF, AndroidFillLightMode.AUTO,
    AndroidFillLightMode.FLASH
})
@Retention(RetentionPolicy.SOURCE)
public @interface AndroidFillLightMode {
  int NOT_SET = 0;
  int OFF = 1;
  int AUTO = 2;
  int FLASH = 3;
  int NUM_ENTRIES = 4;
}
