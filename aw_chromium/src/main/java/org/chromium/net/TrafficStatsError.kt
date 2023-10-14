// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// This file is autogenerated by
//     java_cpp_enum.py
// From
//     ../../net/android/traffic_stats.cc
package org.chromium.net

import androidx.annotation.IntDef

@IntDef(TrafficStatsError.ERROR_NOT_SUPPORTED)
@Retention(AnnotationRetention.SOURCE)
annotation class TrafficStatsError {
    companion object {
        /**
         * Value returned by AndroidTrafficStats APIs when a valid value is unavailable.
         */
        const val ERROR_NOT_SUPPORTED = 0
    }
}