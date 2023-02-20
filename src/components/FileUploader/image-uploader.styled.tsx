import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  .menuIcon {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(0%, 0%);
    z-index: 1;
    filter: drop-shadow(0 0 0.2rem var(--bg-color));
  }

  .disabled {
    pointer-events: none;
    // opacity: 0.6;
  }
  .fullWidth {
    width: 100%;
  }

  .fileList {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;
    margin: var(--spacing-2) 0;
  }
  .editIcon {
    font-size: var(--font-size-normal);
  }
  .file {
    position: relative;
    width: 17rem;
    text-align: center;

    text-decoration: none;
    color: var(--font-color-normal);

    background-color: #9d9a9a;
    border-radius: 1rem;
    padding: 14px;
  }
  .fileListItem {
    width: 100%;
    height: 12rem;

    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .picture {
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
  }

  .dropzone {
    background-color: #9d9a9a;
    border: 0.2rem dashed #9d9a9a;
    height: 100%;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    background-color: var(--bg-color-lighter-dark-contrast);
    &.error {
      border-color: var(--fg-color-error);
    }
  }
  .error {
    color: var(--fg-color-error);
  }

  .label {
    font-weight: 600;
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    margin-top: 2rem;
    display: block;
  }

  .preview {
    display: block;
    width: 100%;
    max-height: 15rem;
  }
`;
