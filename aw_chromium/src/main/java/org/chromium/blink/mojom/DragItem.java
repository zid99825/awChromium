// DragItem.java is auto generated by mojom_bindings_generator.py, do not edit


// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file is autogenerated by:
//     mojo/public/tools/bindings/mojom_bindings_generator.py
// For:
//     third_party/blink/public/mojom/drag/drag.mojom
//

package org.chromium.blink.mojom;


public final class DragItem extends org.chromium.mojo.bindings.Union {

    public static final class Tag {
        public static final int String = 0;
        public static final int File = 1;
        public static final int Binary = 2;
        public static final int FileSystemFile = 3;
    }

    private DragItemString mString;
    private DataTransferFile mFile;
    private DragItemBinary mBinary;
    private DragItemFileSystemFile mFileSystemFile;

    public void setString(DragItemString string) {
        this.mTag = Tag.String;
        this.mString = string;
    }

    public DragItemString getString() {
        assert this.mTag == Tag.String;
        return this.mString;
    }

    public void setFile(DataTransferFile file) {
        this.mTag = Tag.File;
        this.mFile = file;
    }

    public DataTransferFile getFile() {
        assert this.mTag == Tag.File;
        return this.mFile;
    }

    public void setBinary(DragItemBinary binary) {
        this.mTag = Tag.Binary;
        this.mBinary = binary;
    }

    public DragItemBinary getBinary() {
        assert this.mTag == Tag.Binary;
        return this.mBinary;
    }

    public void setFileSystemFile(DragItemFileSystemFile fileSystemFile) {
        this.mTag = Tag.FileSystemFile;
        this.mFileSystemFile = fileSystemFile;
    }

    public DragItemFileSystemFile getFileSystemFile() {
        assert this.mTag == Tag.FileSystemFile;
        return this.mFileSystemFile;
    }


    @Override
    protected final void encode(org.chromium.mojo.bindings.Encoder encoder0, int offset) {
        encoder0.encode(org.chromium.mojo.bindings.BindingsHelper.UNION_SIZE, offset);
        encoder0.encode(this.mTag, offset + 4);
        switch (mTag) {
            case Tag.String: {
                
                encoder0.encode(this.mString, offset + 8, false);
                break;
            }
            case Tag.File: {
                
                encoder0.encode(this.mFile, offset + 8, false);
                break;
            }
            case Tag.Binary: {
                
                encoder0.encode(this.mBinary, offset + 8, false);
                break;
            }
            case Tag.FileSystemFile: {
                
                encoder0.encode(this.mFileSystemFile, offset + 8, false);
                break;
            }
            default: {
                break;
            }
        }
    }

    public static DragItem deserialize(org.chromium.mojo.bindings.Message message) {
        return decode(new org.chromium.mojo.bindings.Decoder(message).decoderForSerializedUnion(), 0);
    }

    public static final DragItem decode(org.chromium.mojo.bindings.Decoder decoder0, int offset) {
        org.chromium.mojo.bindings.DataHeader dataHeader = decoder0.readDataHeaderForUnion(offset);
        if (dataHeader.size == 0) {
            return null;
        }
        DragItem result = new DragItem();
        switch (dataHeader.elementsOrVersion) {
            case Tag.String: {
                
                org.chromium.mojo.bindings.Decoder decoder1 = decoder0.readPointer(offset + org.chromium.mojo.bindings.DataHeader.HEADER_SIZE, false);
                result.mString = DragItemString.decode(decoder1);
                result.mTag = Tag.String;
                break;
            }
            case Tag.File: {
                
                org.chromium.mojo.bindings.Decoder decoder1 = decoder0.readPointer(offset + org.chromium.mojo.bindings.DataHeader.HEADER_SIZE, false);
                result.mFile = DataTransferFile.decode(decoder1);
                result.mTag = Tag.File;
                break;
            }
            case Tag.Binary: {
                
                org.chromium.mojo.bindings.Decoder decoder1 = decoder0.readPointer(offset + org.chromium.mojo.bindings.DataHeader.HEADER_SIZE, false);
                result.mBinary = DragItemBinary.decode(decoder1);
                result.mTag = Tag.Binary;
                break;
            }
            case Tag.FileSystemFile: {
                
                org.chromium.mojo.bindings.Decoder decoder1 = decoder0.readPointer(offset + org.chromium.mojo.bindings.DataHeader.HEADER_SIZE, false);
                result.mFileSystemFile = DragItemFileSystemFile.decode(decoder1);
                result.mTag = Tag.FileSystemFile;
                break;
            }
            default: {
                break;
            }
        }
        return result;
    }
}