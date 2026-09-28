import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';

function getTextContent(node) {
  if (typeof node === 'string' || typeof node === 'number') {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node.map(getTextContent).join('');
  }

  if (React.isValidElement(node)) {
    return getTextContent(node.props.children);
  }

  return '';
}

async function copyText(text) {
  if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  if (typeof document === 'undefined') {
    return;
  }

  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.setAttribute('readonly', '');
  textArea.style.position = 'absolute';
  textArea.style.left = '-9999px';
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
}

export default function InlineCodeWithCopy({children, className, ...props}) {
  const [copied, setCopied] = useState(false);
  const copiedTimeout = useRef(undefined);
  const codeText = useMemo(() => getTextContent(children), [children]);

  const onCopy = useCallback(async () => {
    if (!codeText) {
      return;
    }

    try {
      await copyText(codeText);
      setCopied(true);
      window.clearTimeout(copiedTimeout.current);
      copiedTimeout.current = window.setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      setCopied(false);
    }
  }, [codeText]);

  useEffect(() => {
    return () => window.clearTimeout(copiedTimeout.current);
  }, []);

  if (!codeText?.trim()) {
    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  }

  return (
    <span className="adri-inline-code-with-copy">
      <code className={className} {...props}>
        {children}
      </code>
      <button
        type="button"
        className="adri-inline-code-copy-button"
        onClick={onCopy}
        aria-label={copied ? 'Inline code copied' : 'Copy inline code'}>
        {copied ? 'Copied' : 'Copy'}
      </button>
    </span>
  );
}
