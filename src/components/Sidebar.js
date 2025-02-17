import { Link } from 'gatsby'
import React from 'react'

import floppy from '../assets/nav-floppy.png'

export const Sidebar = () => {
  const links = [
    {
      url: '/topics',
      title: 'All topics',
    },
  ]

  const packagesLinks = [
    {
      url: 'https://xushuosean.github.io/vue2-context',
      title: 'vue2-context',
    },
    {
      url: 'https://xushuosean.github.io/clipboard_keyboard',
      title: 'clipboard_keyboard',
    },
  ]

  return (
    <aside className="sidebar">
      <div className="sidebar-wrapper">
        <div className="sidebar-title">
          <Link to="/" className="sidebar-title-link">
            <span>
              <img
                src={floppy}
                className="sidebar-logo"
                alt="Sean xushuo"
                title="💾"
              />
            </span>
            <span>Sean xushuo</span>
          </Link>
        </div>
        <div className="sidebar-container">
          <section className="sidebar-section">
            <h2>About me</h2>
            <div className="sidebar-content">
              <p>
                I'm <Link to="/me">Sean</Link>, frontend engineer and
                open-source creator. This is my digital garden. 🌱
              </p>
            </div>
          </section>

          {/* <section className="sidebar-section">
            <h2>Stay in touch</h2>
            <p>Get an update when I write something new!</p>
            <p>
              <a
                href="https://go.bsky.app/SmEWb8G"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bluesky 🦋 starter park
              </a>
              <br />
              <a href="/rss.xml">RSS feed</a>
            </p>
            <a
              href="https://taniarascia.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              Email Signup
            </a>
          </section> */}

          <section className="sidebar-section">
            <h2>Some of my favorite posts</h2>
            <nav className="sidebar-menu">
              {links.map((link) => (
                <Link key={link.url} to={link.url}>
                  {link.title}
                </Link>
              ))}
            </nav>
          </section>

          <section className="sidebar-section">
            <h2>Some of my npm packages</h2>
            <nav className="sidebar-menu">
              {packagesLinks.map((link) => (
                <Link key={link.url} to={link.url} _blank>
                  {link.title}
                </Link>
              ))}
            </nav>
          </section>
        </div>
      </div>
    </aside>
  )
}
