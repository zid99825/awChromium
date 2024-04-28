
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file is autogenerated by
//     java_cpp_enum.py
// From
//     ../../net/android/network_change_notifier_android.cc

package org.chromium.net;

import androidx.annotation.IntDef;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

@IntDef({
    NetId.INVALID
})
@Retention(RetentionPolicy.SOURCE)
public @interface NetId {
  /**
   * Cannot use |handles::kInvalidNetworkHandle| here as the Java generator fails, instead enforce
   * their equality with CHECK in NetworkChangeNotifierAndroid().
   */
  int INVALID = -1;
}
