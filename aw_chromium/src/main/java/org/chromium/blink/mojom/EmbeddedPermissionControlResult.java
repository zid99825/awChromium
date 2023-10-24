// EmbeddedPermissionControlResult.java is auto generated by mojom_bindings_generator.py, do not edit


// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file is autogenerated by:
//     mojo/public/tools/bindings/mojom_bindings_generator.py
// For:
//     third_party/blink/public/mojom/permissions/permission.mojom
//

package org.chromium.blink.mojom;

import androidx.annotation.IntDef;

public final class EmbeddedPermissionControlResult {
    private static final boolean IS_EXTENSIBLE = false;
    @IntDef({

        EmbeddedPermissionControlResult.DISMISSED,
        EmbeddedPermissionControlResult.GRANTED,
        EmbeddedPermissionControlResult.DENIED,
        EmbeddedPermissionControlResult.NOT_SUPPORTED,
        EmbeddedPermissionControlResult.RESOLVED_NO_USER_GESTURE})
    public @interface EnumType {}

    public static final int DISMISSED = 0;
    public static final int GRANTED = 1;
    public static final int DENIED = 2;
    public static final int NOT_SUPPORTED = 3;
    public static final int RESOLVED_NO_USER_GESTURE = 4;
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

    private EmbeddedPermissionControlResult() {}
}