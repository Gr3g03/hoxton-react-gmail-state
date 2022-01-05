import Header from './components/Header'

import initialEmails from './data/emails'

import './App.css'

import { useState } from 'react'

function App() {
  // Use initialEmails for state
  let [emails, setEmails] = useState(initialEmails)
  // console.log(emails)

  const allEmails = [...emails]
  console.log(allEmails)


  function toggleRead() {
    const readEmails = [...emails]

    setEmails(readEmails)

  }
  function toggleStar() {
    const staredEmails = [...emails]

    setEmails(staredEmails)
  }

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
          // onClick={() => { }}
          >
            <span className="label">Inbox</span>
            {allEmails.map(function (email) {
              return <span className="count"> {email.read.length}</span>
            })
            }
          </li>
          <li
            className="item"
          // onClick={() => {}}
          >
            <span className="label">Starred</span>
            {allEmails.map(email => (
              <span className="count"> {email.starred}</span>))}
          </li>

          <li className="item toggle">
            <label for="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
            // onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        {emails.map(email =>
        (
          <div key={email} className="email">
            <input
              type="checkbox"
              onChange={() => toggleRead(email)}
              checked={email.read}
            />
            <input
              type="checkbox"
              onChange={() => toggleStar(email)}
              checked={email.starred}
              className="stared-emails"
            />
            <span className="sender">{email.sender}</span>
            <span className="title">{email.title}</span>
          </div>
        )
        )}
      </main>
    </div>
  )
}

export default App
