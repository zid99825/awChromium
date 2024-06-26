
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file is autogenerated by
//     java_cpp_enum.py
// From
//     ../../content/public/browser/bluetooth_chooser.h

package org.chromium.content_public.browser.bluetooth;

import androidx.annotation.IntDef;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

@IntDef({
    BluetoothChooserEvent.DENIED_PERMISSION, BluetoothChooserEvent.CANCELLED,
    BluetoothChooserEvent.SELECTED, BluetoothChooserEvent.RESCAN,
    BluetoothChooserEvent.SHOW_OVERVIEW_HELP, BluetoothChooserEvent.SHOW_ADAPTER_OFF_HELP,
    BluetoothChooserEvent.SHOW_NEED_LOCATION_HELP
})
@Retention(RetentionPolicy.SOURCE)
public @interface BluetoothChooserEvent {
  int DENIED_PERMISSION = 0;
  int CANCELLED = 1;
  int SELECTED = 2;
  int RESCAN = 3;
  int SHOW_OVERVIEW_HELP = 4;
  int SHOW_ADAPTER_OFF_HELP = 5;
  int SHOW_NEED_LOCATION_HELP = 6;
}
