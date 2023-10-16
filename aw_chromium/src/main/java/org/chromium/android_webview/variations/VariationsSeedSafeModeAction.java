// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

package org.chromium.android_webview.variations;

import androidx.annotation.NonNull;

import org.chromium.android_webview.common.SafeModeAction;
import org.chromium.android_webview.common.variations.VariationsUtils;
import org.chromium.base.Log;

import java.io.File;

/**
 * A {@link SafeModeAction} to delete the variations seed.
 */
public class VariationsSeedSafeModeAction implements SafeModeAction {
    private static final String TAG = "WebViewSafeMode";

    // This ID should not be changed or reused.
    private static final String ID = "delete_variations_seed";

    @Override
    @NonNull
    public String getId() {
        return ID;
    }

    @Override
    public void execute() {
        deleteIfExists(VariationsUtils.INSTANCE.getSeedFile());
        deleteIfExists(VariationsUtils.INSTANCE.getNewSeedFile());
        deleteIfExists(VariationsUtils.INSTANCE.getStampFile());
    }

    private static void deleteIfExists(File file) {
        if (!file.exists()) {
            Log.i(TAG, "File does not exist (skipping): %s", file);
            return;
        }
        if (file.delete()) {
            Log.i(TAG, "Successfully deleted %s", file);
        } else {
            Log.e(TAG, "Failed to delete %s", file);
        }
    }
}
