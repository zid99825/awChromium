
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file is autogenerated by
//     java_cpp_enum.py
// From
//     ../../third_party/blink/public/platform/web_text_input_type.h

package org.chromium.blink_public.web;

import androidx.annotation.IntDef;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

@IntDef({
    WebTextInputFlags.NONE, WebTextInputFlags.AUTOCOMPLETE_ON, WebTextInputFlags.AUTOCOMPLETE_OFF,
    WebTextInputFlags.AUTOCORRECT_ON, WebTextInputFlags.AUTOCORRECT_OFF,
    WebTextInputFlags.SPELLCHECK_ON, WebTextInputFlags.SPELLCHECK_OFF,
    WebTextInputFlags.AUTOCAPITALIZE_NONE, WebTextInputFlags.AUTOCAPITALIZE_CHARACTERS,
    WebTextInputFlags.AUTOCAPITALIZE_WORDS, WebTextInputFlags.AUTOCAPITALIZE_SENTENCES,
    WebTextInputFlags.HAVE_NEXT_FOCUSABLE_ELEMENT,
    WebTextInputFlags.HAVE_PREVIOUS_FOCUSABLE_ELEMENT, WebTextInputFlags.HAS_BEEN_PASSWORD_FIELD,
    WebTextInputFlags.VERTICAL
})
@Retention(RetentionPolicy.SOURCE)
public @interface WebTextInputFlags {
  int NONE = 0;
  int AUTOCOMPLETE_ON = 1 << 0;
  int AUTOCOMPLETE_OFF = 1 << 1;
  int AUTOCORRECT_ON = 1 << 2;
  int AUTOCORRECT_OFF = 1 << 3;
  int SPELLCHECK_ON = 1 << 4;
  int SPELLCHECK_OFF = 1 << 5;
  int AUTOCAPITALIZE_NONE = 1 << 6;
  int AUTOCAPITALIZE_CHARACTERS = 1 << 7;
  int AUTOCAPITALIZE_WORDS = 1 << 8;
  int AUTOCAPITALIZE_SENTENCES = 1 << 9;
  int HAVE_NEXT_FOCUSABLE_ELEMENT = 1 << 10;
  int HAVE_PREVIOUS_FOCUSABLE_ELEMENT = 1 << 11;
  /**
   * Whether an input field is or has ever been a password. For such an input type we don't want
   * autocomplete or a keyboard to memorize the content.
   */
  int HAS_BEEN_PASSWORD_FIELD = 1 << 12;
  int VERTICAL = 1 << 13;
}
