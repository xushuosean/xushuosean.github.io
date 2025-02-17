import { useEffect, useState } from 'react'

export const useActiveHash = (itemIds) => {
  const [activeHash, setActiveHash] = useState(``)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(encodeURI(entry.target.id))
          }
        })
      },
      { rootMargin: `0% 0% -80% 0%` }
    )

    const elements = []

    itemIds.forEach((id) => {
      const cnId = decodeURI(id);
      if (document.getElementById(cnId))
        elements.push(document.getElementById(cnId))
    })

    elements.forEach((element) => {
      observer.observe(element)
    })

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element)
      })
    }
  }, [itemIds])

  return activeHash
}
