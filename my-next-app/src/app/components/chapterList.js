import Image from 'next/image';

export default function chapterList({ chapters }) {
  return (
    <div className="flex space-x-4 overflow-x-auto">
      {chapters.map((chapter, index) => (
        <div key={index} className="min-w-[120px] flex-shrink-0">
          <Image
            src={chapter.thumbnail}
            alt={chapter.title}
            width={120}
            height={68}
            className="rounded-lg"
          />
          <p className="text-sm text-center mt-2">{chapter.title}</p>
          <p className="text-xs text-gray-500 text-center">
            {chapter.timestamp}
          </p>
        </div>
      ))}
    </div>
  );
}
