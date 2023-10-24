// CreateDigitalGoodsResponseCode.java is auto generated by mojom_bindings_generator.py, do not edit


// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file is autogenerated by:
//     mojo/public/tools/bindings/mojom_bindings_generator.py
// For:
//     components/digital_goods/mojom/digital_goods.mojom
//

package org.chromium.payments.mojom;

import androidx.annotation.IntDef;

public final class CreateDigitalGoodsResponseCode {
    private static final boolean IS_EXTENSIBLE = true;

    @IntDef({CreateDigitalGoodsResponseCode.OK, CreateDigitalGoodsResponseCode.ERROR, CreateDigitalGoodsResponseCode.UNSUPPORTED_PAYMENT_METHOD, CreateDigitalGoodsResponseCode.UNSUPPORTED_CONTEXT})
    public @interface EnumType {
    }

    public static final int OK = 0;
    public static final int ERROR = 1;
    public static final int UNSUPPORTED_PAYMENT_METHOD = 2;
    public static final int UNSUPPORTED_CONTEXT = 3;
    public static final int MIN_VALUE = 0;
    public static final int MAX_VALUE = 3;

    public static boolean isKnownValue(int value) {
        return value >= 0 && value <= 3;
    }

    public static void validate(int value) {
        if (IS_EXTENSIBLE || isKnownValue(value)) return;
        throw new org.chromium.mojo.bindings.DeserializationException("Invalid enum value.");
    }

    public static int toKnownValue(int value) {
        return value;
    }

    private CreateDigitalGoodsResponseCode() {
    }
}