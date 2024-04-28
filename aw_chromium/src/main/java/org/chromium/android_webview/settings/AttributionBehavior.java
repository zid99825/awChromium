
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file is autogenerated by
//     java_cpp_enum.py
// From
//     ../../android_webview/browser/aw_settings.h

package org.chromium.android_webview.settings;

import androidx.annotation.IntDef;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

@IntDef({
    AttributionBehavior.DISABLED, AttributionBehavior.APP_SOURCE_AND_WEB_TRIGGER,
    AttributionBehavior.WEB_SOURCE_AND_WEB_TRIGGER, AttributionBehavior.APP_SOURCE_AND_APP_TRIGGER
})
@Retention(RetentionPolicy.SOURCE)
public @interface AttributionBehavior {
  int DISABLED = 0;
  int APP_SOURCE_AND_WEB_TRIGGER = 1;
  int WEB_SOURCE_AND_WEB_TRIGGER = 2;
  int APP_SOURCE_AND_APP_TRIGGER = 3;
}
