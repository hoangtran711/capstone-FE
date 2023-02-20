import React, { useState, useEffect, memo } from 'react';
import { DropEvent, FileRejection, useDropzone } from 'react-dropzone';
import { Wrapper } from './image-uploader.styled';

interface IImageUploaderProps {
  label?: string;
  initialFilePath?: string;
  disabled?: boolean;
  onDrop: (
    acceptedFiles: File[],
    fileRejections: FileRejection[],
    event: DropEvent,
  ) => void;
}

function Uploader({
  label,
  onDrop,
  initialFilePath,
  disabled,
}: IImageUploaderProps) {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': [],
    },
    onDrop: (acceptedFiles: any, fileRejections: any, event: any) => {
      setFiles(
        acceptedFiles.map((file: any) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      );
      onDrop(acceptedFiles, fileRejections, event);
    },
  });

  const initialThumb = initialFilePath ? (
    <img src={initialFilePath} className={'preview'} />
  ) : null;

  const thumbs = files.map((file: any) => (
    <img
      key={file.name}
      src={file.preview}
      className={'preview'}
      onLoad={() => {
        URL.revokeObjectURL(file.preview);
      }}
    />
  ));

  useEffect(() => {
    return () =>
      files.forEach((file: any) => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <Wrapper>
      {label && <span className={'label'}>{label}</span>}
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        {thumbs.length > 0 ? (
          <aside className={'thumbsContainer'}>{thumbs}</aside>
        ) : initialThumb ? (
          <aside className={'thumbsContainer'}>{initialThumb}</aside>
        ) : (
          <p>Drag drop some files here, or click to select files</p>
        )}
      </div>
    </Wrapper>
  );
}

export const ImageUploader = memo(Uploader);
