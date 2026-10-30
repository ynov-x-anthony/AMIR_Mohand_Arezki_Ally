import { useId } from 'react'

type Props = { onClose: () => void }

// Mission : cette modale s'ouvre/se ferme, mais rien n'indique à un lecteur
// d'écran qu'il s'agit d'une boîte de dialogue, et Échap ne fait rien.

export default function Modal({ onClose }: Props) {
  const titleId = useId()

  return (
    <div className="modal-overlay">
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <h2 id={titleId}>Informations</h2>
        <p>Ce module couvre l'accessibilité et le SEO.</p>
        <button onClick={onClose}>Fermer</button>
      </div>
    </div>
  )
}
