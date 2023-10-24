// ContextMenuDataMediaType.java is auto generated by mojom_bindings_generator.py, do not edit


// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file is autogenerated by:
//     mojo/public/tools/bindings/mojom_bindings_generator.py
// For:
//     third_party/blink/public/mojom/context_menu/context_menu.mojom
//

package org.chromium.blink.mojom;

import androidx.annotation.IntDef;

public final class ContextMenuDataMediaType {
    private static final boolean IS_EXTENSIBLE = false;
    @IntDef({

        ContextMenuDataMediaType.NONE,
        ContextMenuDataMediaType.IMAGE,
        ContextMenuDataMediaType.VIDEO,
        ContextMenuDataMediaType.AUDIO,
        ContextMenuDataMediaType.CANVAS,
        ContextMenuDataMediaType.FILE,
        ContextMenuDataMediaType.PLUGIN})
    public @interface EnumType {}

    public static final int NONE = 0;
    public static final int IMAGE = 1;
    public static final int VIDEO = 2;
    public static final int AUDIO = 3;
    public static final int CANVAS = 4;
    public static final int FILE = 5;
    public static final int PLUGIN = 6;
    public static final int MIN_VALUE = 0;
    public static final int MAX_VALUE = 6;

    public static boolean isKnownValue(int value) {
        return value >= 0 && value <= 6;
    }

    public static void validate(int value) {
        if (IS_EXTENSIBLE || isKnownValue(value)) return;
        throw new org.chromium.mojo.bindings.DeserializationException("Invalid enum value.");
    }

    public static int toKnownValue(int value) {
      return value;
    }

    private ContextMenuDataMediaType() {}
}