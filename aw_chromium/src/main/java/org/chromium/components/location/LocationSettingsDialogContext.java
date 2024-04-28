
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file is autogenerated by
//     java_cpp_enum.py
// From
//     ../../components/location/android/location_settings_dialog_context.h

package org.chromium.components.location;

import androidx.annotation.IntDef;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

@IntDef({
    LocationSettingsDialogContext.DEFAULT, LocationSettingsDialogContext.SEARCH
})
@Retention(RetentionPolicy.SOURCE)
public @interface LocationSettingsDialogContext {
  /**
   * Default context.
   */
  int DEFAULT = 1;
  /**
   * Prompt triggered in the context of a search.
   */
  int SEARCH = 2;
}
