// Suppression de l'import inutilisé de React
import { useState, ReactNode } from "react";

const posts = [
  {
    category: "Psychology",
    title: "How to manage anxiety and depression?",
    image: "/assets/images/blog/unwell-ill-woman-suffering-from-painful-head-migraine-putting-pression-temples-with-fingers-stressed-young-adult-person-with-hypertension-feeling-sick.png",
    author: "Dr Ekose",
    date: "16 Octobre 2024",
  },
  {
    category: "Nutrition",
    title: "Fruits and vegetables: are they necessary?",
    image: "/assets/images/blog/world-health-day-celebration-with-healthy-food.png",
    author: "Dr Ekose",
    date: "14 Octobre 2024",
  },
  {
    category: "Vaccination",
    title: "Vaccination: an imperative, a right, and a duty.",
    image: "/assets/images/blog/small-black-boy-receiving-vaccine-due-covid19-pandemic.png",
    author: "Dr Ekose",
    date: "06 Octobre 2024",
  },
  {
    category: "Medecine",
    title: "Self-medication: what can be said about it?",
    image: "/assets/images/blog/36965984ff5a9e368d0fc1a95d8291b1.png",
    author: "Dr Ekose",
    date: "02 Octobre 2024",
  },
  {
    category: "Medecine",
    title: "DNA: Unraveling the Mysteries of Heredity.",
    image: "/assets/images/blog/dadd95a3a411c73749e3757593c94fb3.png",
    author: "Dr Ekose",
    date: "02 Octobre 2024",
  },
  {
    category: "Medecine",
    title: "Asthma: Myths and Realities You Should Know",
    image: "/assets/images/blog/man-with-medical-problems.png",
    author: "Dr Ekose",
    date: "27 Septembre 2024",
  },
  // Add more posts to demonstrate pagination
  ...Array(12).fill(null).map((_, i) => ({
    category: "Extra",
    title: `Extra post ${i + 1}`,
    image: "https://via.placeholder.com/300x200",
    author: "Dr Ekose",
    date: "01 Septembre 2024",
  }))
];

const videos = [
    {
      category: "Health Tips",
      title: "10 Easy Ways to Boost Your Immune System",
      thumbnail: "https://www.verywellfit.com/thmb/D7bZJTYZ_Eto8Wlh8yo26n6yHwg=/1500x1000/filters:no_upscale():max_bytes(150000):strip_icc()/immune-boosting-foods-4179058_final-9076d73bc86c4f249d9b8c8977f442b3.jpg",
      duration: "15:30",
      views: "10K",
      date: "20 Octobre 2024",
    },
    {
      category: "Fitness",
      title: "Full Body Workout at Home - No Equipment Needed",
      thumbnail: "https://www.coachmag.co.uk/sites/coachmag/files/2023-03/Bodyweight-Exercises-Poster-1200x675.jpg",
      duration: "25:45",
      views: "25K",
      date: "18 Octobre 2024",
    },
    {
      category: "Nutrition",
      title: "Healthy Meal Prep Ideas for Busy Professionals",
      thumbnail: "https://www.eatingwell.com/thmb/B7mc9EBB6vG-dmjs8b-FzTcPo3I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/healthy-meal-prep-for-the-week-559535302-5d7d263a46e0fb0001a618c6.jpg",
      duration: "20:15",
      views: "15K",
      date: "15 Octobre 2024",
    },
    {
      category: "Mental Health",
      title: "5 Minute Meditation for Stress Relief",
      thumbnail: "https://www.headspace.com/static/6c8e7d2e7b3d3e38a2d871e888f3d292.jpg",
      duration: "07:20",
      views: "30K",
      date: "12 Octobre 2024",
    },
    {
      category: "Medical Advice",
      title: "Understanding Common Blood Test Results",
      thumbnail: "https://www.webmd.com/medically-reviewed/images/analysis-of-blood-test-1280x720.jpg",
      duration: "18:50",
      views: "20K",
      date: "10 Octobre 2024",
    },
    {
      category: "Wellness",
      title: "The Importance of Quality Sleep",
      thumbnail: "https://images.unsplash.com/photo-1592972343831-cb5096741a50",
      duration: "22:10",
      views: "18K",
      date: "08 Octobre 2024",
    },
  ];
  

const POSTS_PER_PAGE = 6;

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}>
    {children}
  </div>
);

interface TabsProps {
  children: ReactNode;
}

const Tabs: React.FC<TabsProps> = ({ children }) => (
  <div className="w-full border-b border-gray-200 mb-4">{children}</div>
);

interface TabsListProps {
  children: ReactNode;
}

const TabsList: React.FC<TabsListProps> = ({ children }) => (
  <div className="flex justify-center space-x-4">{children}</div>
);

interface TabsTriggerProps {
  isActive: boolean;
  onClick: () => void;
  children: ReactNode;
}

const TabsTrigger: React.FC<TabsTriggerProps> = ({ isActive, onClick, children }) => (
  <button
    className={`px-6 py-2 font-semibold rounded-t-md transition-colors duration-300 ${
      isActive
        ? "text-blue-600 border-b-4 border-blue-600"
        : "text-gray-600 hover:text-blue-600"
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);

interface TabsContentProps {
  children: ReactNode;
}

const TabsContent: React.FC<TabsContentProps> = ({ children }) => (
  <div className="mt-4">{children}</div>
);

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className = "" }) => (
  <button
    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export const BlogPosts: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"recent" | "videos">("recent");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  const paginatedPosts = posts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <section className="max-w-7xl mx-auto px-4 pt-16">
      <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-800">Ekose Posts</h2>
      <Tabs>
        <TabsList>
          <TabsTrigger
            isActive={activeTab === "recent"}
            onClick={() => setActiveTab("recent")}
          >
            Recent
          </TabsTrigger>
          <TabsTrigger
            isActive={activeTab === "videos"}
            onClick={() => setActiveTab("videos")}
          >
            Videos
          </TabsTrigger>
        </TabsList>
        <TabsContent>
          {activeTab === "recent" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedPosts.map((post, index) => (
                <Card key={index}>
                  <div className="relative h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                    <div className="absolute bottom-0 left-0 bg-blue-900 text-white px-4 py-1 text-sm font-medium">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2 text-gray-800">{post.title}</h3>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{post.author}</span>
                      <span>{post.date}</span>
                    </div>
                    <a
                      href="#"
                      className="text-blue-500 hover:text-blue-600 text-sm mt-2 inline-block"
                    >
                      See more
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          )}
          {activeTab === "videos" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video, index) => (
                <Card key={index}>
                  <div className="relative h-48">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg
                        className="w-16 h-16 text-white opacity-80"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 text-sm rounded">
                      {video.duration}
                    </div>
                    <div className="absolute bottom-0 left-0 bg-blue-900 text-white px-4 py-1 text-sm font-medium">
                      {video.category}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2 text-gray-800">{video.title}</h3>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{video.views} views</span>
                      <span>{video.date}</span>
                    </div>
                    <a
                      href="#"
                      className="text-blue-500 hover:text-blue-600 text-sm mt-2 inline-block"
                    >
                      Watch video
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
      {activeTab === "recent" && (
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`${
                currentPage === page
                  ? "bg-blue-600 text-white"
                  : "bg-white text-blue-600 hover:bg-blue-100"
              } border border-blue-600`}
            >
              {page}
            </Button>
          ))}
          {currentPage < totalPages && (
            <Button
              onClick={() => setCurrentPage(currentPage + 1)}
              className="bg-white text-blue-600 hover:bg-blue-100 border border-blue-600"
            >
              Next
              <svg
                className="inline-block ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Button>
          )}
        </div>
      )}
    </section>
  );
};

