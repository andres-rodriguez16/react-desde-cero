import "./Footer.css"

export const Foteer = ({filters}: any) => {
  return (
    <div className="footer">
      {JSON.stringify(filters, null, 2)}
    </div>
  )
}
