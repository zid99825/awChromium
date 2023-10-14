// WebSandboxFlags.java is auto generated by mojom_bindings_generator.py, do not edit


// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file is autogenerated by:
//     mojo/public/tools/bindings/mojom_bindings_generator.py
// For:
//     services/network/public/mojom/web_sandbox_flags.mojom
//

package org.chromium.network.mojom;

import androidx.annotation.IntDef;

public final class WebSandboxFlags {
    private static final boolean IS_EXTENSIBLE = true;
    @IntDef({

        WebSandboxFlags.NONE,
        WebSandboxFlags.NAVIGATION,
        WebSandboxFlags.PLUGINS,
        WebSandboxFlags.ORIGIN,
        WebSandboxFlags.FORMS,
        WebSandboxFlags.SCRIPTS,
        WebSandboxFlags.TOP_NAVIGATION,
        WebSandboxFlags.POPUPS,
        WebSandboxFlags.AUTOMATIC_FEATURES,
        WebSandboxFlags.POINTER_LOCK,
        WebSandboxFlags.DOCUMENT_DOMAIN,
        WebSandboxFlags.ORIENTATION_LOCK,
        WebSandboxFlags.PROPAGATES_TO_AUXILIARY_BROWSING_CONTEXTS,
        WebSandboxFlags.MODALS,
        WebSandboxFlags.PRESENTATION_CONTROLLER,
        WebSandboxFlags.TOP_NAVIGATION_BY_USER_ACTIVATION,
        WebSandboxFlags.DOWNLOADS,
        WebSandboxFlags.STORAGE_ACCESS_BY_USER_ACTIVATION,
        WebSandboxFlags.ALL})
    public @interface EnumType {}

    public static final int NONE = 0;
    public static final int NAVIGATION = 1;
    public static final int PLUGINS = 2;
    public static final int ORIGIN = 4;
    public static final int FORMS = 8;
    public static final int SCRIPTS = 16;
    public static final int TOP_NAVIGATION = 32;
    public static final int POPUPS = 64;
    public static final int AUTOMATIC_FEATURES = 128;
    public static final int POINTER_LOCK = 256;
    public static final int DOCUMENT_DOMAIN = 512;
    public static final int ORIENTATION_LOCK = 1024;
    public static final int PROPAGATES_TO_AUXILIARY_BROWSING_CONTEXTS = 2048;
    public static final int MODALS = 4096;
    public static final int PRESENTATION_CONTROLLER = 8192;
    public static final int TOP_NAVIGATION_BY_USER_ACTIVATION = 16384;
    public static final int DOWNLOADS = 32768;
    public static final int STORAGE_ACCESS_BY_USER_ACTIVATION = 65536;
    public static final int ALL = -1;
    public static final int MIN_VALUE = -1;
    public static final int MAX_VALUE = 65536;

    public static boolean isKnownValue(int value) {
        switch (value) {
            case -1:
            case 0:
            case 1:
            case 2:
            case 4:
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
                return true;
        }
        return false;
    }

    public static void validate(int value) {
        if (IS_EXTENSIBLE || isKnownValue(value)) return;
        throw new org.chromium.mojo.bindings.DeserializationException("Invalid enum value.");
    }

    public static int toKnownValue(int value) {
      return value;
    }

    private WebSandboxFlags() {}
}