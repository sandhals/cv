import React from 'react'

interface HeaderProps {
  currentPage?: 'home' | 'projects'
}

export default function Header({ currentPage = 'home' }: HeaderProps) {
  return (
    <header className="header">
      <h1 className="logo">brixton sandhals</h1>
      <div className="nav">
        {currentPage === 'home' ? (
          <a href="/projects" className="nav-item">
            PROJECTS <span className="italic">(Index)</span>
          </a>
        ) : (
          <a href="/" className="nav-item">
            HOME <span className="italic">(Contact)</span>
          </a>
        )}
        <a href="http://brixton.zip/" className="nav-item">PERSONAL SITE</a>
      </div>
    </header>
  )
}