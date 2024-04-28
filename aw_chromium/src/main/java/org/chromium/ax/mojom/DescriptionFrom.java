// DescriptionFrom.java is auto generated by mojom_bindings_generator.py, do not edit


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

public final class DescriptionFrom {
    private static final boolean IS_EXTENSIBLE = false;
    @IntDef({

        DescriptionFrom.NONE,
        DescriptionFrom.ARIA_DESCRIPTION,
        DescriptionFrom.ATTRIBUTE_EXPLICITLY_EMPTY,
        DescriptionFrom.BUTTON_LABEL,
        DescriptionFrom.RELATED_ELEMENT,
        DescriptionFrom.RUBY_ANNOTATION,
        DescriptionFrom.SUMMARY,
        DescriptionFrom.SVG_DESC_ELEMENT,
        DescriptionFrom.TABLE_CAPTION,
        DescriptionFrom.TITLE,
        DescriptionFrom.POPOVER_ATTRIBUTE})
    public @interface EnumType {}

    public static final int NONE = 0;
    public static final int ARIA_DESCRIPTION = 1;
    public static final int ATTRIBUTE_EXPLICITLY_EMPTY = 2;
    public static final int BUTTON_LABEL = 3;
    public static final int RELATED_ELEMENT = 4;
    public static final int RUBY_ANNOTATION = 5;
    public static final int SUMMARY = 6;
    public static final int SVG_DESC_ELEMENT = 7;
    public static final int TABLE_CAPTION = 8;
    public static final int TITLE = 9;
    public static final int POPOVER_ATTRIBUTE = 10;
    public static final int MIN_VALUE = 0;
    public static final int MAX_VALUE = 10;

    public static boolean isKnownValue(int value) {
        return value >= 0 && value <= 10;
    }

    public static void validate(int value) {
        if (IS_EXTENSIBLE || isKnownValue(value)) return;
        throw new org.chromium.mojo.bindings.DeserializationException("Invalid enum value.");
    }

    public static int toKnownValue(int value) {
      return value;
    }

    private DescriptionFrom() {}
}