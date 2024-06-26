// Restriction.java is auto generated by mojom_bindings_generator.py, do not edit


// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file is autogenerated by:
//     mojo/public/tools/bindings/mojom_bindings_generator.py
// For:
//     ui/accessibility/ax_enums.mojom
//

package org.chromium.ax.mojom;

import androidx.annotation.IntDef;

public final class Restriction {
    private static final boolean IS_EXTENSIBLE = false;
    @IntDef({

        Restriction.NONE,
        Restriction.READ_ONLY,
        Restriction.DISABLED})
    public @interface EnumType {}

    public static final int NONE = 0;
    public static final int READ_ONLY = 1;
    public static final int DISABLED = 2;
    public static final int MIN_VALUE = 0;
    public static final int MAX_VALUE = 2;

    public static boolean isKnownValue(int value) {
        return value >= 0 && value <= 2;
    }

    public static void validate(int value) {
        if (IS_EXTENSIBLE || isKnownValue(value)) return;
        throw new org.chromium.mojo.bindings.DeserializationException("Invalid enum value.");
    }

    public static int toKnownValue(int value) {
      return value;
    }

    private Restriction() {}
}