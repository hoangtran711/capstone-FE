import React, { useState, useEffect, memo } from 'react';
import { DropEvent, FileRejection, useDropzone } from 'react-dropzone';
import classnames from 'classnames';
import styles from './file-uploader.module.scss';

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
    <img src={initialFilePath} className={styles.preview} />
  ) : null;

  const thumbs = files.map((file: any) => (
    <img
      key={file.name}
      src={file.preview}
      className={styles.preview}
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
    <section
      className={classnames(styles.container, disabled && styles.disabled)}
    >
      {label && <span className={styles.label}>{label}</span>}
      <div {...getRootProps({ className: styles.dropzone })}>
        <input {...getInputProps()} />
        {thumbs.length > 0 ? (
          <aside className={styles.thumbsContainer}>{thumbs}</aside>
        ) : initialThumb ? (
          <aside className={styles.thumbsContainer}>{initialThumb}</aside>
        ) : (
          <p>Drag drop some files here, or click to select files</p>
        )}
      </div>
    </section>
  );
}

export const ImageUploader = memo(Uploader);
