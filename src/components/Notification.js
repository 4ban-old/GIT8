import React, { useEffect } from "react";

export const NotificationItem = (props) => {
  const { notification } = props
  return (
    <>
      <div>I'm a notification {notification.id} {notification.subject.title} [{notification.updated_at}]</div>
    </>
  )
};

export const RepositoryItem = (props) => {
  const { name, children } = props
  return (
    <div style={{border: '1px solid black', margin: '10px'}}>
      <div>Repo: {name}</div>
      <details style={{ whiteSpace: 'pre-wrap' }}>
        {children}
      </details>
    </div>
  )
};
