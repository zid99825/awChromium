// FileSystemAccessObserver.java is auto generated by mojom_bindings_generator.py, do not edit


// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file is autogenerated by:
//     mojo/public/tools/bindings/mojom_bindings_generator.py
// For:
//     third_party/blink/public/mojom/file_system_access/file_system_access_observer.mojom
//

package org.chromium.blink.mojom;


public interface FileSystemAccessObserver extends org.chromium.mojo.bindings.Interface {



    interface Proxy extends FileSystemAccessObserver, org.chromium.mojo.bindings.Interface.Proxy {
    }

    Manager<FileSystemAccessObserver, FileSystemAccessObserver.Proxy> MANAGER = FileSystemAccessObserver_Internal.MANAGER;

    void onFileChanges(
FileSystemAccessChange[] changes);


}