```javascript
export const BriefInfo = ({ brief }) => {
  return (
    <div className="bg-white shadow rounded p-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Brief Details</h3>
      <p className="text-gray-700"><strong>Name:</strong> {brief.name}</p>
      <p className="text-gray-700"><strong>ID:</strong> {brief.id}</p>
      <p className="text-gray-700"><strong>Region:</strong> {brief.region}</p>
      <p className="text-gray-700"><strong>Created At:</strong> {brief.created_at}</p>
      <p className="text-gray-700"><strong>Plan:</strong> {brief.plan}</p>
    </div>
  );
};
```
