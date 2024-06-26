
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
    PhotoCapabilityDouble.MIN_ZOOM, PhotoCapabilityDouble.MAX_ZOOM,
    PhotoCapabilityDouble.CURRENT_ZOOM, PhotoCapabilityDouble.STEP_ZOOM,
    PhotoCapabilityDouble.MIN_FOCUS_DISTANCE, PhotoCapabilityDouble.MAX_FOCUS_DISTANCE,
    PhotoCapabilityDouble.CURRENT_FOCUS_DISTANCE, PhotoCapabilityDouble.STEP_FOCUS_DISTANCE,
    PhotoCapabilityDouble.MIN_EXPOSURE_COMPENSATION,
    PhotoCapabilityDouble.MAX_EXPOSURE_COMPENSATION,
    PhotoCapabilityDouble.CURRENT_EXPOSURE_COMPENSATION,
    PhotoCapabilityDouble.STEP_EXPOSURE_COMPENSATION, PhotoCapabilityDouble.MIN_EXPOSURE_TIME,
    PhotoCapabilityDouble.MAX_EXPOSURE_TIME, PhotoCapabilityDouble.CURRENT_EXPOSURE_TIME,
    PhotoCapabilityDouble.STEP_EXPOSURE_TIME
})
@Retention(RetentionPolicy.SOURCE)
public @interface PhotoCapabilityDouble {
  int MIN_ZOOM = 0;
  int MAX_ZOOM = 1;
  int CURRENT_ZOOM = 2;
  int STEP_ZOOM = 3;
  int MIN_FOCUS_DISTANCE = 4;
  int MAX_FOCUS_DISTANCE = 5;
  int CURRENT_FOCUS_DISTANCE = 6;
  int STEP_FOCUS_DISTANCE = 7;
  int MIN_EXPOSURE_COMPENSATION = 8;
  int MAX_EXPOSURE_COMPENSATION = 9;
  int CURRENT_EXPOSURE_COMPENSATION = 10;
  int STEP_EXPOSURE_COMPENSATION = 11;
  int MIN_EXPOSURE_TIME = 12;
  int MAX_EXPOSURE_TIME = 13;
  int CURRENT_EXPOSURE_TIME = 14;
  int STEP_EXPOSURE_TIME = 15;
  int NUM_ENTRIES = 16;
}
