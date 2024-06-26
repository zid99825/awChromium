
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file is autogenerated by
//     java_cpp_enum.py
// From
//     ../../ui/touch_selection/touch_selection_draggable.h

package org.chromium.ui.touch_selection;

import androidx.annotation.IntDef;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

@IntDef({
    TouchSelectionDraggableType.NONE, TouchSelectionDraggableType.TOUCH_HANDLE,
    TouchSelectionDraggableType.LONGPRESS
})
@Retention(RetentionPolicy.SOURCE)
public @interface TouchSelectionDraggableType {
  int NONE = 0;
  int TOUCH_HANDLE = 1;
  int LONGPRESS = 2;
}
