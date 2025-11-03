"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  BookOpen,
  Brain,
  TrendingUp,
  Users,
  Award,
  Clock,
  Target,
  ChevronRight,
  Play,
  CheckCircle,
  AlertCircle,
  Star,
  Lightbulb,
  MessageSquare,
  Calendar,
  BarChart3,
} from "lucide-react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts"

// Dummy data
const studentProgress = [
  { subject: "Mathematics", progress: 85, mastery: 12, total: 15, grade: "A" },
  { subject: "English", progress: 72, mastery: 9, total: 12, grade: "B+" },
  { subject: "Science", progress: 91, mastery: 14, total: 16, grade: "A+" },
  { subject: "History", progress: 68, mastery: 8, total: 11, grade: "B" },
]

const weeklyProgress = [
  { day: "Mon", hours: 2.5, concepts: 4 },
  { day: "Tue", hours: 3.2, concepts: 6 },
  { day: "Wed", hours: 1.8, concepts: 3 },
  { day: "Thu", hours: 4.1, concepts: 8 },
  { day: "Fri", hours: 2.9, concepts: 5 },
  { day: "Sat", hours: 3.5, concepts: 7 },
  { day: "Sun", hours: 2.1, concepts: 4 },
]

const projects = [
  {
    id: 1,
    title: "Entrepreneurship Challenge",
    description: "Create a business plan for a sustainable energy solution",
    skills: ["Leadership", "Public Speaking", "Critical Thinking"],
    progress: 75,
    dueDate: "2024-01-15",
    participants: 4,
  },
  {
    id: 2,
    title: "Community Service Project",
    description: "Organize a local environmental cleanup initiative",
    skills: ["Teamwork", "Organization", "Communication"],
    progress: 45,
    dueDate: "2024-01-22",
    participants: 6,
  },
  {
    id: 3,
    title: "Science Fair Presentation",
    description: "Research and present on renewable energy sources",
    skills: ["Research", "Public Speaking", "Data Analysis"],
    progress: 90,
    dueDate: "2024-01-10",
    participants: 2,
  },
]

const recentActivities = [
  { student: "Sarah M.", action: "Completed", subject: "Algebra - Quadratic Equations", time: "2 hours ago" },
  { student: "James K.", action: "Struggling with", subject: "Physics - Newton's Laws", time: "3 hours ago" },
  { student: "Emma L.", action: "Mastered", subject: "English - Essay Writing", time: "5 hours ago" },
  { student: "David R.", action: "Started", subject: "History - World War II", time: "1 day ago" },
]

const masteryData = [
  { name: "Mastered", value: 68, color: "#10b981" },
  { name: "In Progress", value: 24, color: "#f59e0b" },
  { name: "Not Started", value: 8, color: "#ef4444" },
]

export default function EducationPlatform() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [selectedStudent, setSelectedStudent] = useState("All Students")

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold">EduAI Platform</h1>
                <p className="text-sm text-muted-foreground">CAPS & IEB Curriculum • Grades R-12</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="gap-1">
                <Star className="w-3 h-3" />
                Grade 10B
              </Badge>
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback>TM</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="dashboard" className="gap-2">
              <BarChart3 className="w-4 h-4" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="tutor" className="gap-2">
              <Brain className="w-4 h-4" />
              AI Tutor
            </TabsTrigger>
            <TabsTrigger value="analytics" className="gap-2">
              <TrendingUp className="w-4 h-4" />
              Analytics
            </TabsTrigger>
            <TabsTrigger value="projects" className="gap-2">
              <Users className="w-4 h-4" />
              Projects
            </TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">24</p>
                      <p className="text-sm text-muted-foreground">Concepts Mastered</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">18.2h</p>
                      <p className="text-sm text-muted-foreground">Study Time This Week</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Target className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">89%</p>
                      <p className="text-sm text-muted-foreground">Average Mastery</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-chart-3/10 rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-chart-3" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">3</p>
                      <p className="text-sm text-muted-foreground">Active Projects</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Subject Progress */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Subject Progress</CardTitle>
                  <CardDescription>Mastery-based progression across all subjects</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {studentProgress.map((subject) => (
                    <div key={subject.subject} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{subject.subject}</span>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">{subject.grade}</Badge>
                          <span className="text-sm text-muted-foreground">
                            {subject.mastery}/{subject.total}
                          </span>
                        </div>
                      </div>
                      <Progress value={subject.progress} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Weekly Learning Activity</CardTitle>
                  <CardDescription>Study hours and concepts learned</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={weeklyProgress}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="hours" fill="hsl(var(--primary))" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activities */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Learning Activities</CardTitle>
                <CardDescription>Latest student progress and achievements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-muted/50">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback>
                          {activity.student
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="text-sm">
                          <span className="font-medium">{activity.student}</span> {activity.action}{" "}
                          <span className="font-medium">{activity.subject}</span>
                        </p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                      {activity.action === "Struggling with" && <AlertCircle className="w-4 h-4 text-destructive" />}
                      {activity.action === "Mastered" && <CheckCircle className="w-4 h-4 text-green-500" />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* AI Tutor Tab */}
          <TabsContent value="tutor" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="w-5 h-5 text-primary" />
                      Adaptive Learning Path
                    </CardTitle>
                    <CardDescription>Personalized curriculum based on your progress</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg border border-primary/20">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <Play className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">Current: Quadratic Functions</h4>
                        <p className="text-sm text-muted-foreground">Mathematics • Grade 10 • Estimated 45 min</p>
                      </div>
                      <Button size="sm">Continue</Button>
                    </div>

                    <div className="space-y-3">
                      <h5 className="font-medium text-sm">Next in your path:</h5>
                      {[
                        { subject: "Mathematics", topic: "Exponential Functions", difficulty: "Medium" },
                        { subject: "Physics", topic: "Momentum & Impulse", difficulty: "Hard" },
                        { subject: "English", topic: "Poetry Analysis", difficulty: "Easy" },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 rounded-lg border">
                          <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center text-xs">
                            {index + 2}
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-sm">{item.topic}</p>
                            <p className="text-xs text-muted-foreground">{item.subject}</p>
                          </div>
                          <Badge
                            variant={
                              item.difficulty === "Hard"
                                ? "destructive"
                                : item.difficulty === "Medium"
                                  ? "secondary"
                                  : "default"
                            }
                          >
                            {item.difficulty}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>AI Tutor Feedback</CardTitle>
                    <CardDescription>Personalized insights and recommendations</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                        <div>
                          <h5 className="font-medium text-green-800">Great Progress!</h5>
                          <p className="text-sm text-green-700">
                            You've mastered linear equations faster than expected. Ready for quadratic functions.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                      <div className="flex items-start gap-3">
                        <Lightbulb className="w-5 h-5 text-amber-600 mt-0.5" />
                        <div>
                          <h5 className="font-medium text-amber-800">Study Tip</h5>
                          <p className="text-sm text-amber-700">
                            Try practicing word problems to strengthen your application skills in mathematics.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-start gap-3">
                        <MessageSquare className="w-5 h-5 text-blue-600 mt-0.5" />
                        <div>
                          <h5 className="font-medium text-blue-800">Need Help?</h5>
                          <p className="text-sm text-blue-700">
                            I noticed you spent extra time on Newton's Laws. Would you like additional practice
                            problems?
                          </p>
                          <Button size="sm" variant="outline" className="mt-2 bg-transparent">
                            Get Extra Practice
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Learning Streak</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">12</div>
                    <p className="text-sm text-muted-foreground">Days in a row</p>
                    <div className="flex justify-center gap-1 mt-4">
                      {Array.from({ length: 7 }).map((_, i) => (
                        <div key={i} className={`w-3 h-3 rounded-full ${i < 5 ? "bg-primary" : "bg-muted"}`} />
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Mastery Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={150}>
                      <PieChart>
                        <Pie data={masteryData} cx="50%" cy="50%" innerRadius={40} outerRadius={60} dataKey="value">
                          {masteryData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                    <div className="space-y-2 mt-4">
                      {masteryData.map((item) => (
                        <div key={item.name} className="flex items-center gap-2 text-sm">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                          <span>
                            {item.name}: {item.value}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Learning Analytics</h2>
                <p className="text-muted-foreground">Detailed insights for mentors and teachers</p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  Export Report
                </Button>
                <Button size="sm">Schedule Meeting</Button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Learning Velocity</CardTitle>
                  <CardDescription>Concepts mastered over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <LineChart data={weeklyProgress}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="concepts" stroke="hsl(var(--primary))" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Time Distribution</CardTitle>
                  <CardDescription>Study time across subjects</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {studentProgress.map((subject) => (
                      <div key={subject.subject} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>{subject.subject}</span>
                          <span>{Math.round(subject.progress * 0.3)}h this week</span>
                        </div>
                        <Progress value={subject.progress * 0.8} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Intervention Alerts</CardTitle>
                  <CardDescription>Students who may need additional support</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { name: "James K.", issue: "Struggling with Physics concepts", priority: "High", time: "3 days" },
                      { name: "Lisa P.", issue: "Below average study time", priority: "Medium", time: "1 week" },
                      { name: "Mike R.", issue: "Missed 2 project deadlines", priority: "High", time: "2 days" },
                    ].map((alert, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 border rounded-lg">
                        <AlertCircle
                          className={`w-5 h-5 ${alert.priority === "High" ? "text-destructive" : "text-amber-500"}`}
                        />
                        <div className="flex-1">
                          <p className="font-medium">{alert.name}</p>
                          <p className="text-sm text-muted-foreground">{alert.issue}</p>
                        </div>
                        <Badge variant={alert.priority === "High" ? "destructive" : "secondary"}>
                          {alert.priority}
                        </Badge>
                        <Button size="sm" variant="outline">
                          Contact
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Project-Based Learning</h2>
                <p className="text-muted-foreground">Hands-on projects developing life skills</p>
              </div>
              <Button className="gap-2">
                <Users className="w-4 h-4" />
                Create New Project
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {projects.map((project) => (
                <Card key={project.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{project.title}</CardTitle>
                        <CardDescription className="mt-2">{project.description}</CardDescription>
                      </div>
                      <Badge variant="outline" className="gap-1">
                        <Users className="w-3 h-3" />
                        {project.participants}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Progress</span>
                        <span>{project.progress}%</span>
                      </div>
                      <Progress value={project.progress} className="h-2" />
                    </div>

                    <div>
                      <p className="text-sm font-medium mb-2">Skills Developed:</p>
                      <div className="flex flex-wrap gap-1">
                        {project.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        Due {project.dueDate}
                      </div>
                      <Button size="sm" variant="outline">
                        View Details
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Life Skills Tracking</CardTitle>
                <CardDescription>Development of essential 21st-century skills</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { skill: "Public Speaking", level: 7, maxLevel: 10, color: "bg-primary" },
                    { skill: "Teamwork", level: 8, maxLevel: 10, color: "bg-secondary" },
                    { skill: "Leadership", level: 6, maxLevel: 10, color: "bg-accent" },
                    { skill: "Critical Thinking", level: 9, maxLevel: 10, color: "bg-chart-1" },
                  ].map((item) => (
                    <div key={item.skill} className="text-center space-y-2">
                      <div className="relative w-16 h-16 mx-auto">
                        <div className="w-full h-full rounded-full bg-muted">
                          <div
                            className={`w-full rounded-full ${item.color} transition-all duration-500`}
                            style={{ height: `${(item.level / item.maxLevel) * 100}%` }}
                          />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white">
                          {item.level}
                        </div>
                      </div>
                      <p className="font-medium text-sm">{item.skill}</p>
                      <p className="text-xs text-muted-foreground">
                        Level {item.level}/{item.maxLevel}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
