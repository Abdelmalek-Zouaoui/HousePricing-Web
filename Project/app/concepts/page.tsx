"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { TrendingUp, Target, Zap, Activity, BarChart3, Brain, ChevronDown, ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import { useState } from "react"

export default function ConceptsPage() {
  const [openCards, setOpenCards] = useState<string[]>([])

  const toggleCard = (cardId: string) => {
    setOpenCards((prev) => (prev.includes(cardId) ? prev.filter((id) => id !== cardId) : [...prev, cardId]))
  }

  const concepts = [
    {
      id: "linear-regression",
      icon: TrendingUp,
      title: "Linear Regression",
      summary: "A statistical method that models the relationship between variables using a linear equation.",
      color: "blue",
      example: "Price = β₀ + β₁×Area + β₂×Bedrooms + ... + ε",
      code: `from sklearn.linear_model import LinearRegression

# Create and train the model
model = LinearRegression()
model.fit(X_train, y_train)

# Get coefficients
print("Intercept:", model.intercept_)
print("Coefficients:", model.coef_)`,
      explanation:
        "Linear regression finds the best-fitting straight line through data points by minimizing the sum of squared residuals. It assumes a linear relationship between independent variables (features) and the dependent variable (target).",
    },
    {
      id: "minmax-scaler",
      icon: Zap,
      title: "MinMaxScaler",
      summary: "Transforms features by scaling each feature to a given range, typically [0,1].",
      color: "green",
      example: "X_scaled = (X - X_min) / (X_max - X_min)",
      code: `from sklearn.preprocessing import MinMaxScaler

scaler = MinMaxScaler()
X_scaled = scaler.fit_transform(X)

# Original: [1000, 5000, 10000]
# Scaled:   [0.0, 0.44, 1.0]`,
      explanation:
        "MinMaxScaler prevents features with larger scales from dominating the model. For example, house area (in sq ft) would overshadow number of bedrooms without scaling.",
    },
    {
      id: "rfe",
      icon: Target,
      title: "Recursive Feature Elimination (RFE)",
      summary: "Selects features by recursively eliminating the least important ones.",
      color: "purple",
      example: "Start with all features → Rank → Remove worst → Repeat",
      code: `from sklearn.feature_selection import RFE

# Select top 6 features
rfe = RFE(estimator=LinearRegression(), n_features_to_select=6)
X_selected = rfe.fit_transform(X, y)

print("Selected features:", rfe.support_)
print("Feature ranking:", rfe.ranking_)`,
      explanation:
        "RFE helps identify the most important features by training the model multiple times and eliminating features with the lowest importance scores until the desired number remains.",
    },
    {
      id: "vif",
      icon: Activity,
      title: "Variance Inflation Factor (VIF)",
      summary: "Measures how much the variance of a coefficient increases due to multicollinearity.",
      color: "orange",
      example: "VIF = 1/(1-R²) where R² is from regressing Xi on other features",
      code: `from statsmodels.stats.outliers_influence import variance_inflation_factor
import pandas as pd

# Calculate VIF for each feature
vif_data = pd.DataFrame()
vif_data["Feature"] = X.columns
vif_data["VIF"] = [variance_inflation_factor(X.values, i) 
                   for i in range(len(X.columns))]

# Remove features with VIF > 5
print(vif_data)`,
      explanation:
        "VIF detects multicollinearity between features. High VIF (>5) indicates that a feature can be predicted well by other features, making it redundant and potentially harmful to model stability.",
    },
    {
      id: "mae",
      icon: Target,
      title: "Mean Absolute Error (MAE)",
      summary: "Average of absolute differences between predicted and actual values.",
      color: "red",
      example: "MAE = Σ|yᵢ - ŷᵢ| / n",
      code: `from sklearn.metrics import mean_absolute_error

# Dummy data for demonstration
y_true = [3, -0.5, 2, 7]
y_pred = [2.5, 0.0, 2, 8]

mae = mean_absolute_error(y_true, y_pred)
print(f"MAE: {mae:,.0f}")

# Example: If MAE = 1,250,000
# On average, predictions are off by $1.25M`,
      explanation:
        "MAE gives the average prediction error in the same units as the target variable. It's less sensitive to outliers than MSE and provides an intuitive measure of model accuracy.",
    },
    {
      id: "rmse",
      icon: BarChart3,
      title: "Root Mean Squared Error (RMSE)",
      summary: "Square root of the average squared differences between predicted and actual values.",
      color: "indigo",
      example: "RMSE = √(Σ(yᵢ - ŷᵢ)² / n)",
      code: `from sklearn.metrics import mean_squared_error
import numpy as np

# Dummy data for demonstration
y_true = [3, -0.5, 2, 7]
y_pred = [2.5, 0.0, 2, 8]

mse = mean_squared_error(y_true, y_pred)
rmse = np.sqrt(mse)
print(f"RMSE: {rmse:,.0f}")

# RMSE penalizes larger errors more than MAE`,
      explanation:
        "RMSE penalizes larger errors more heavily than MAE due to squaring. It is useful when large errors are particularly undesirable. RMSE is always ≥ MAE, with equality only when all errors are the same magnitude.",
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />

      <div className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">Concept Learning</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Master the key concepts behind our machine learning model
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {concepts.map((concept, index) => (
                <motion.div
                  key={concept.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <Collapsible open={openCards.includes(concept.id)} onOpenChange={() => toggleCard(concept.id)}>
                    <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <CollapsibleTrigger className="w-full text-left">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className={`p-2 bg-${concept.color}-100 dark:bg-${concept.color}-900 rounded-lg`}>
                                <concept.icon
                                  className={`h-5 w-5 text-${concept.color}-600 dark:text-${concept.color}-400`}
                                />
                              </div>
                              <CardTitle className="text-lg">{concept.title}</CardTitle>
                            </div>
                            <ChevronDown
                              className={`h-4 w-4 transition-transform duration-300 ${
                                openCards.includes(concept.id) ? "rotate-180" : ""
                              }`}
                            />
                          </div>
                          <CardDescription className="text-left">{concept.summary}</CardDescription>
                        </CardHeader>
                      </CollapsibleTrigger>

                      <CollapsibleContent>
                        <CardContent className="pt-0">
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-4"
                          >
                            <div>
                              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Formula/Process</h4>
                              <Badge variant="secondary" className="font-mono text-xs">
                                {concept.example}
                              </Badge>
                            </div>

                            <div>
                              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Code Example</h4>
                              <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto">
                                <code>{concept.code}</code>
                              </pre>
                            </div>

                            <div>
                              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Explanation</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                {concept.explanation}
                              </p>
                            </div>
                          </motion.div>
                        </CardContent>
                      </CollapsibleContent>
                    </Card>
                  </Collapsible>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 mb-12"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                  <Brain className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Learning Path Recommendation</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                To master machine learning concepts, we recommend studying them in this order:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-3">Foundation (Start Here)</h4>
                  <ol className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>1. Linear Regression basics</li>
                    <li>2. Data preprocessing with MinMaxScaler</li>
                    <li>3. Understanding MAE and RMSE</li>
                  </ol>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">Advanced (Build Upon)</h4>
                  <ol className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>4. Feature selection with RFE</li>
                    <li>5. Multicollinearity and VIF</li>
                    <li>6. Model evaluation strategies</li>
                  </ol>
                </div>
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-between items-center"
            >
              <Link href="/results">
                <Button
                  variant="outline"
                  className="group border-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:border-gray-600"
                >
                  <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                  Back to Results
                </Button>
              </Link>

              <Link href="/downloads">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group">
                  Next: Downloads
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
