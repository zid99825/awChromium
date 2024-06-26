// SwapResult.java is auto generated by mojom_bindings_generator.py, do not edit


// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file is autogenerated by:
//     mojo/public/tools/bindings/mojom_bindings_generator.py
// For:
//     ui/gfx/mojom/swap_result.mojom
//

package org.chromium.gfx.mojom;

import androidx.annotation.IntDef;

public final class SwapResult {
    private static final boolean IS_EXTENSIBLE = false;
    @IntDef({

        SwapResult.ACK,
        SwapResult.FAILED,
        SwapResult.SKIPPED,
        SwapResult.NAK_RECREATE_BUFFERS})
    public @interface EnumType {}

    public static final int ACK = 0;
    public static final int FAILED = 1;
    public static final int SKIPPED = 2;
    public static final int NAK_RECREATE_BUFFERS = 3;
    public static final int MIN_VALUE = 0;
    public static final int MAX_VALUE = 3;

    public static boolean isKnownValue(int value) {
        return value >= 0 && value <= 3;
    }

    public static void validate(int value) {
        if (IS_EXTENSIBLE || isKnownValue(value)) return;
        throw new org.chromium.mojo.bindings.DeserializationException("Invalid enum value.");
    }

    public static int toKnownValue(int value) {
      return value;
    }

    private SwapResult() {}
}