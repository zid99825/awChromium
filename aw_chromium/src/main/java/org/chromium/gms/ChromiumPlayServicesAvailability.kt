// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
package org.chromium.gms

import android.content.Context
import com.google.android.gms.common.ConnectionResult
import com.google.android.gms.common.GoogleApiAvailability

// Refer to go/doubledown-play-services#new-apis for more detail.
object ChromiumPlayServicesAvailability {
    /**
     * The minimum GMS version we're requesting. isGooglePlayServicesAvailable will fail if the
     * found version on the devices is lower than this number. This number should never be updated;
     * if you need to check for a higher number, use
     * [)][GoogleApiAvailability.isGooglePlayServicesAvailable] instead.
     * To see how this number originated, see
     * https://bugs.chromium.org/p/chromium/issues/detail?id=1145211#c3.
     */
    private const val GMS_VERSION_NUMBER = 20415000

    /**
     * Checks if Play Services is available in this context.
     *
     * If at all possible, do not use this. From a GMSCore team member: "we would not recommend
     * checking availability upfront. You should be able to just call the API directly, and it
     * should handle the availability for you. If the API is not available, it should either prompt
     * the user to update GMS Core or fail with exception." If in doubt, please consult with your
     * PM/UX.
     */
    @JvmStatic
    fun isGooglePlayServicesAvailable(context: Context?): Boolean {
        return (GoogleApiAvailability.getInstance().isGooglePlayServicesAvailable(
            context!!, GMS_VERSION_NUMBER
        ) == ConnectionResult.SUCCESS)
    }

}