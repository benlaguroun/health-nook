import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './BlogPost.css';

const blogPosts = [
  {
    id: 1,
    title: 'The Benefits of a Healthy Lifestyle',
    content: `
      <p>Adopting a healthy lifestyle offers numerous benefits, including improved physical health, mental well-being, and a longer life expectancy. By making conscious choices about diet, exercise, and daily habits, you can significantly enhance your quality of life.</p>
      <p>One key benefit of a healthy lifestyle is a reduced risk of chronic diseases such as heart disease, diabetes, and obesity. A balanced diet rich in nutrients, regular physical activity, and maintaining a healthy weight are crucial for preventing these conditions. Additionally, staying active helps strengthen muscles and bones, improving overall mobility and reducing the risk of injury.</p>
      <p>Moreover, a healthy lifestyle positively impacts mental health. Regular exercise releases endorphins, known as "feel-good" hormones, which can alleviate symptoms of depression and anxiety. Eating a balanced diet also supports brain health, improving focus, memory, and overall cognitive function.</p>
      <p>In conclusion, embracing a healthy lifestyle is essential for both physical and mental well-being. By making simple changes, such as eating nutritious foods and staying active, you can enjoy a higher quality of life and prevent many health issues.</p>
    `,
  },
  {
    id: 2,
    title: 'Tips for Staying Active at Home',
    content: `
      <p>Staying active at home can be challenging, especially with a busy schedule or limited space. However, incorporating physical activity into your daily routine is crucial for maintaining good health. Here are some practical tips to help you stay active at home:</p>
      <h2>1. Set a Schedule</h2>
      <p>Establish a regular exercise routine by setting specific times for physical activity each day. Consistency is key to building a habit and achieving your fitness goals.</p>
      <h2>2. Use Online Resources</h2>
      <p>Take advantage of online workout videos, apps, and virtual classes. Whether you're interested in yoga, HIIT, or dance, there's something for everyone. Many resources are available for free or at a low cost.</p>
      <h2>3. Get Creative with Equipment</h2>
      <p>You don't need a gym to get a good workout. Use household items like water bottles, cans, or furniture for resistance training. Bodyweight exercises, such as push-ups and squats, are also effective.</p>
      <h2>4. Stay Active Throughout the Day</h2>
      <p>Incorporate movement into your daily routine by taking short breaks to stretch, walk, or do a quick workout. Even small bursts of activity can add up and contribute to your overall fitness.</p>
      <p>By following these tips, you can stay active and healthy even while at home. Remember, the most important thing is to find activities you enjoy and make them a part of your daily life.</p>
    `,
  },
  {
    id: 3,
    title: 'Healthy Eating Habits for a Balanced Diet',
    content: `
      <p>Maintaining a balanced diet is essential for overall health and well-being. A diet rich in diverse nutrients supports bodily functions, boosts immunity, and provides energy. Here are some healthy eating habits to incorporate into your lifestyle:</p>
      <h2>1. Prioritize Whole Foods</h2>
      <p>Choose whole, unprocessed foods such as fruits, vegetables, whole grains, lean proteins, and healthy fats. These foods provide essential nutrients and are generally lower in unhealthy fats, sugars, and additives.</p>
      <h2>2. Practice Portion Control</h2>
      <p>Be mindful of portion sizes to avoid overeating. Use smaller plates, measure portions, and listen to your body's hunger and fullness cues. Eating slowly can also help you enjoy your food and prevent overconsumption.</p>
      <h2>3. Stay Hydrated</h2>
      <p>Water is vital for maintaining bodily functions and overall health. Aim to drink at least eight glasses of water daily and limit sugary beverages and excessive caffeine intake.</p>
      <h2>4. Plan and Prepare Meals</h2>
      <p>Plan your meals and snacks to ensure a balanced intake of nutrients throughout the day. Preparing meals at home allows you to control ingredients and portion sizes, making it easier to stick to a healthy diet.</p>
      <p>By adopting these healthy eating habits, you can nourish your body, support overall health, and enjoy a balanced diet. Remember, moderation is key, and making small, sustainable changes can lead to lasting benefits.</p>
    `,
  },
];

const BlogPost = () => {
  const { id } = useParams();
  const blogPost = blogPosts.find((post) => post.id === parseInt(id));

  if (!blogPost) {
    return <div>Blog post not found</div>;
  }

  return (
    <Container className="py-5">
      <h1>{blogPost.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
    </Container>
  );
};

export default BlogPost;
