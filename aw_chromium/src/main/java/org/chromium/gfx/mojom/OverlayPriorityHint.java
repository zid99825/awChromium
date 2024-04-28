// OverlayPriorityHint.java is auto generated by mojom_bindings_generator.py, do not edit


// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file is autogenerated by:
//     mojo/public/tools/bindings/mojom_bindings_generator.py
// For:
//     ui/gfx/mojom/overlay_priority_hint.mojom
//

package org.chromium.gfx.mojom;

import androidx.annotation.IntDef;

public final class OverlayPriorityHint {
    private static final boolean IS_EXTENSIBLE = false;
    @IntDef({

        OverlayPriorityHint.NONE,
        OverlayPriorityHint.REGULAR,
        OverlayPriorityHint.LOW_LATENCY_CANVAS,
        OverlayPriorityHint.HARDWARE_PROTECTION,
        OverlayPriorityHint.VIDEO})
    public @interface EnumType {}

    public static final int NONE = 0;
    public static final int REGULAR = 1;
    public static final int LOW_LATENCY_CANVAS = 2;
    public static final int HARDWARE_PROTECTION = 3;
    public static final int VIDEO = 4;
    public static final int MIN_VALUE = 0;
    public static final int MAX_VALUE = 4;

    public static boolean isKnownValue(int value) {
        return value >= 0 && value <= 4;
    }

    public static void validate(int value) {
        if (IS_EXTENSIBLE || isKnownValue(value)) return;
        throw new org.chromium.mojo.bindings.DeserializationException("Invalid enum value.");
    }

    public static int toKnownValue(int value) {
      return value;
    }

    private OverlayPriorityHint() {}
}