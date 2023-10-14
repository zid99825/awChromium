// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// This file is autogenerated by
//     java_cpp_enum.py
// From
//     ../../third_party/blink/public/platform/web_text_input_type.h
package org.chromium.blink_public.web

import androidx.annotation.IntDef

@IntDef(
    WebTextInputFlags.NONE,
    WebTextInputFlags.AUTOCOMPLETE_ON,
    WebTextInputFlags.AUTOCOMPLETE_OFF,
    WebTextInputFlags.AUTOCORRECT_ON,
    WebTextInputFlags.AUTOCORRECT_OFF,
    WebTextInputFlags.SPELLCHECK_ON,
    WebTextInputFlags.SPELLCHECK_OFF,
    WebTextInputFlags.AUTOCAPITALIZE_NONE,
    WebTextInputFlags.AUTOCAPITALIZE_CHARACTERS,
    WebTextInputFlags.AUTOCAPITALIZE_WORDS,
    WebTextInputFlags.AUTOCAPITALIZE_SENTENCES,
    WebTextInputFlags.HAVE_NEXT_FOCUSABLE_ELEMENT,
    WebTextInputFlags.HAVE_PREVIOUS_FOCUSABLE_ELEMENT,
    WebTextInputFlags.HAS_BEEN_PASSWORD_FIELD
)
@Retention(
    AnnotationRetention.SOURCE
)
annotation class WebTextInputFlags {
    companion object {
        const val NONE = 0
        const val AUTOCOMPLETE_ON = 1 shl 0
        const val AUTOCOMPLETE_OFF = 1 shl 1
        const val AUTOCORRECT_ON = 1 shl 2
        const val AUTOCORRECT_OFF = 1 shl 3
        const val SPELLCHECK_ON = 1 shl 4
        const val SPELLCHECK_OFF = 1 shl 5
        const val AUTOCAPITALIZE_NONE = 1 shl 6
        const val AUTOCAPITALIZE_CHARACTERS = 1 shl 7
        const val AUTOCAPITALIZE_WORDS = 1 shl 8
        const val AUTOCAPITALIZE_SENTENCES = 1 shl 9
        const val HAVE_NEXT_FOCUSABLE_ELEMENT = 1 shl 10
        const val HAVE_PREVIOUS_FOCUSABLE_ELEMENT = 1 shl 11

        /**
         * Whether an input field is or has ever been a password. For such an input type we don't want
         * autocomplete or a keyboard to memorize the content.
         */
        const val HAS_BEEN_PASSWORD_FIELD = 1 shl 12
    }
}