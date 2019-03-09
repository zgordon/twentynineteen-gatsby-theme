import React from "react"

const AuthorArchive = ({ pageContext: { nodes } }) => {
  return (
    <div>
      <h2>Author Archive</h2>
      <div>
        {nodes &&
          nodes.map(node => {
            const { slug } = node
            return (
              <div>
                <h2>{slug}</h2>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default AuthorArchive
