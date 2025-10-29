import { Box, Flex, Text, Button } from '@chakra-ui/react'
import { useState } from 'react'

function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [showAll, setShowAll] = useState(false)

  const projects = [
    {
      title: 'Coordinator at the Young Haitian Authors Workshop',
      location: 'Delmas, Ouest, HAITI',
      period: 'March 2018 - August 2018',
      details: 'My job was to help writers aged 12 to 18 write texts while being at home via google Docs to be able to complete a book that was published at Livres en Folies in 2019.'
    },
    {
      title: 'Website Manager at the PEET',
      location: 'Tabarre, Ouest, HAITI',
      period: 'January 2020 - May 2022',
      details: 'With the webhost Hostinger I was responsible for the coding and the management of the website. For a better organization of the platform, I used Wordpress and Wix to be aware of certain plugins, Google Analytics to be able to control the users who enter and leave my website and to know which categories to classify them, Google Adsense and Facebook Ads to be able to make targeted advertisements from the data collected from Google Analytics to reach more people.'
    },
    {
      title: 'Database Administrator at The PEET',
      location: 'Tabarre, Ouest, HAITI',
      period: 'January 2020 - May 2022',
      details: 'I managed the database created with MySQL via PHPMyAdmin to collect requests and requests securely and reliably that users gave us via the platform or by Email with the Titan Mail Account platform and thus their feedback about our services to better progress of our services. And I also use some knowledge in cybersecurity to be able to avoid all forms of malicious web intrusion. Software like SSL Certificate, Firewall and two-factor authentication.'
    },
    {
      title: 'Intern at SAP Cybersecurity',
      location: 'USA',
      period: 'March 2022',
      details: "My job was to secure some employee accounts while ensuring that the passwords met the criteria of SAP's corporate policies and then analyze incoming mail to ensure that there is no PHISHING MAIL to prevent malicious software on the corporate network from computer attacks."
    },
    {
      title: 'Intern at MASTERCAD NY CEO JOBS COUNCIL',
      location: 'New York, USA',
      period: 'March 2022',
      details: "My job was to filter emails to avoid spam that lands in users' mailboxes and prevent them from malicious users. They were also taught how to differentiate between professional corporate emails to the detriment of forgers used by scammers and other malicious users to steal data."
    },
    {
      title: 'Mathematics Teacher and Computer Science teacher',
      location: '',
      period: 'March 2020 – April 2023',
      details: 'To do the courses, sometimes I used two platforms to try to accommodate myself to new technologies among which: MOODLE and Google Classroom to compensate for the instability which prevented the courses from functioning normally. And sometimes I used the website of The PEET when it was online.'
    },
    {
      title: 'Website Designer, Newsletter Editor, Database Administrator at Mosaic Group',
      location: '',
      period: 'December 2023 – Current',
      details: 'As a Website Designer, Newsletter Editor, and Database Administrator at Mosaic Group, I am responsible for designing and maintaining the company website, ensuring seamless user experience and functionality. I also oversee the creation and distribution of newsletters, crafting engaging content to keep our audience informed. Additionally, I manage and optimize databases, ensuring efficient data storage and retrieval to support company operations.'
    },
    {
      title: 'Team Leader at Platform',
      location: '',
      period: '2024 – 2025',
      details: 'Led a cross-functional team of developers to design and build a collaboration platform where professionals from diverse fields can connect, exchange knowledge, and co-create solutions. Oversaw sprint planning, code reviews, and releases; defined architecture, API contracts, and CI/CD; coordinated UX, frontend, and backend streams; and ensured high availability, performance, and security. Drove stakeholder alignment and roadmap execution to deliver a scalable product experience.'
    }
  ]

  const parseYears = (period) => {
    if (!period) return { start: 0, end: 0 }
    const normalized = period.replace(/\u2013|\u2014|–|—/g, '-').trim()
    // Handle "Month YYYY - Month YYYY" or "YYYY - YYYY" or "YYYY – Current"
    const yearMatches = normalized.match(/(\d{4})/g)
    if (!yearMatches) return { start: 0, end: 0 }
    const nums = yearMatches.map((y) => parseInt(y, 10))
    let start = nums[0] || 0
    let end = nums[1] || nums[0] || 0
    if (/current/i.test(normalized)) end = 9999
    return { start, end }
  }

  const sortedProjects = [...projects].sort((a, b) => {
    const ay = parseYears(a.period)
    const by = parseYears(b.period)
    if (by.end !== ay.end) return by.end - ay.end
    return by.start - ay.start
  })

  const visibleProjects = showAll ? sortedProjects : sortedProjects.slice(0, 3)

  const handleCardClick = (project) => {
    setSelectedProject(project)
  }

  const handleCloseModal = () => {
    setSelectedProject(null)
  }

  return (
    <>
      <Box id="work" py={20} px={16} bg="gray.900" position="relative" overflow="hidden">
        {/* Floating Green Rectangle */}
        <Box
          position="absolute"
          top="5%"
          right="5%"
          w="50px"
          h="30px"
          border="2px solid"
          borderColor="green.400"
          transform="rotate(45deg)"
          animation="rotate 10s linear infinite"
          zIndex={1}
        />

        <Box maxW="1400px" mx="auto" position="relative" zIndex={2}>
          {/* Section Title */}
          <Box mb={12} textAlign="center">
            <Text 
              fontSize="5xl" 
              fontWeight="bold"
              mb={2}
              style={{
                background: 'linear-gradient(to right, #00CEF4, #B172EA)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            >
              Featured Projects
            </Text>
            <Box 
              w="100px" 
              h="2px" 
              mx="auto"
              style={{
                background: 'linear-gradient(to right, #00CEF4, #B172EA)'
              }}
            />
          </Box>

          {/* Projects Grid */}
          <Flex gap={6} flexWrap="wrap" justify="center">
            {visibleProjects.map((project, index) => (
              <Box
                key={index}
                flex="1"
                minW="280px"
                maxW="380px"
                bg="gray.800"
                borderRadius="lg"
                border="1px solid"
                borderColor="gray.700"
                overflow="hidden"
                transition="all 0.3s"
                cursor="pointer"
                _hover={{
                  borderColor: '#00CEF4',
                  transform: 'translateY(-5px)',
                  boxShadow: '0 10px 30px rgba(0, 206, 244, 0.3)'
                }}
                onClick={() => handleCardClick(project)}
              >
                <Box h="200px" bg="gray.700" display="flex" alignItems="center" justifyContent="center">
                  <Text color="gray.500" fontSize="sm">Image Placeholder</Text>
                </Box>
                <Text p={4} fontSize="xl" fontWeight="semibold" color="white">
                  {project.title}
                </Text>
                <Text px={4} pb={4} fontSize="sm" color="gray.400">
                  {project.location && `${project.location} • `}{project.period}
                </Text>
              </Box>
            ))}
          </Flex>
          <Box textAlign="center" mt={8}>
            {sortedProjects.length > 3 && (
              <Button
                size="md"
                px={6}
                borderRadius="md"
                onClick={() => setShowAll(!showAll)}
                style={{
                  background: showAll
                    ? 'linear-gradient(to right, #B172EA, #00CEF4)'
                    : 'linear-gradient(to right, #00CEF4, #B172EA)'
                }}
                color="white"
                _hover={{ transform: 'translateY(-2px)', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}
                transition="all 0.3s"
              >
                {showAll ? 'View less' : 'View more'}
              </Button>
            )}
          </Box>
        </Box>
      </Box>

      {/* Custom Modal */}
      {selectedProject && (
        <Box
          position="fixed"
          top={0}
          left={0}
          right={0}
          bottom={0}
          zIndex={9999}
          display="flex"
          alignItems="center"
          justifyContent="center"
          onClick={handleCloseModal}
        >
          {/* Overlay */}
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bg="blackAlpha.700"
            backdropFilter="blur(10px)"
          />
          
          {/* Modal Content */}
          <Box
            position="relative"
            bg="gray.800"
            borderRadius="xl"
            border="2px solid"
            borderColor="#00CEF4"
            maxW="600px"
            w="90%"
            p={8}
            mx={4}
            onClick={(e) => e.stopPropagation()}
            boxShadow="0 20px 60px rgba(0, 206, 244, 0.4)"
          >
            {/* Close Button */}
            <Box
              position="absolute"
              top={4}
              right={4}
              cursor="pointer"
              fontSize="2xl"
              color="white"
              _hover={{ color: '#00CEF4' }}
              onClick={handleCloseModal}
              transition="all 0.3s"
            >
              ×
            </Box>

            {/* Modal Body */}
            <Flex direction="column" spacing={6}>
              <Box>
                <Text 
                  fontSize="2xl" 
                  fontWeight="bold"
                  color="white"
                  mb={2}
                  pr={8}
                  style={{
                    background: 'linear-gradient(to right, #00CEF4, #B172EA)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    color: 'transparent'
                  }}
                >
                  {selectedProject.title}
                </Text>
                <Text fontSize="md" color="gray.400">
                  {selectedProject.location && `${selectedProject.location} • `}{selectedProject.period}
                </Text>
              </Box>
              <Box mt={6}>
                <Text fontSize="lg" color="gray.300" lineHeight="1.8">
                  {selectedProject.details}
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>
      )}
    </>
  )
}

export default FeaturedProjects
