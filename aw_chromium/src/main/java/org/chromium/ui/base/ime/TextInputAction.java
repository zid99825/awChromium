
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file is autogenerated by
//     java_cpp_enum.py
// From
//     ../../ui/base/ime/text_input_action.h

package org.chromium.ui.base.ime;

import androidx.annotation.IntDef;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

@IntDef({
    TextInputAction.DEFAULT, TextInputAction.ENTER, TextInputAction.DONE, TextInputAction.GO,
    TextInputAction.NEXT, TextInputAction.PREVIOUS, TextInputAction.SEARCH, TextInputAction.SEND,
    TextInputAction.MAX_VALUE
})
@Retention(RetentionPolicy.SOURCE)
public @interface TextInputAction {
  int DEFAULT = 0;
  int ENTER = 1;
  int DONE = 2;
  int GO = 3;
  int NEXT = 4;
  int PREVIOUS = 5;
  int SEARCH = 6;
  int SEND = 7;
  int MAX_VALUE = 7;
}
