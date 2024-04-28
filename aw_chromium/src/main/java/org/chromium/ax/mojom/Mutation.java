// Mutation.java is auto generated by mojom_bindings_generator.py, do not edit


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

public final class Mutation {
    private static final boolean IS_EXTENSIBLE = false;
    @IntDef({

        Mutation.NONE,
        Mutation.NODE_CREATED,
        Mutation.SUBTREE_CREATED,
        Mutation.NODE_CHANGED,
        Mutation.NODE_REMOVED,
        Mutation.TEXT_CHANGED,
        Mutation.SUBTREE_UPDATE_END})
    public @interface EnumType {}

    public static final int NONE = 0;
    public static final int NODE_CREATED = 1;
    public static final int SUBTREE_CREATED = 2;
    public static final int NODE_CHANGED = 3;
    public static final int NODE_REMOVED = 4;
    public static final int TEXT_CHANGED = 5;
    public static final int SUBTREE_UPDATE_END = 6;
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

    private Mutation() {}
}